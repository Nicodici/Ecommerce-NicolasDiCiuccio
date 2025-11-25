// import { productosRopa } from "../../data/products.js";
import { showSpinner, closeSpinner } from "../utils/spinner.js";
import { handleEmptyCartClick } from "../utils/cartEmpty.js";
import { getProducts } from "../services/api.js";
// <<<<<<<<<<<<<QuerySelectors>>>>>>>>>>>
//llamo al id del contenedor principal del index para manipular el doom
const containerProducts = document.getElementById("cont-products");
// array con todos los elementos de los selectores que tengan una clase ".li-button"
const btnCategories = document.querySelectorAll(".li-button");
//elemento para modificar el titulo principal
const titleMajor = document.getElementById("tit-principal");
//evitar hardcodeo
const colectionText = "Colección 2025";
//numero del carrito
const numberCart = document.querySelector("#number");
//carrito del localStorage
let arrayCart = JSON.parse(localStorage.getItem("products-in-cart")) || [];
const cartLink = document.querySelector("#cart-link");
// Selector correcto para el nav-div del carrito
const navDiv = document.querySelector(".nav-div:last-child");
const containerSpinner = document.getElementById("containerSpinner");
// <<<<<<<<<<<<<QuerySelectors>>>>>>>>>>>

// Variable global para productos
let productosRopa = [];

//  Función de inicialización asíncrona
async function initializeApp() {
  try {
    showSpinner(containerProducts, containerSpinner, titleMajor);

    // Cargar productos desde API
    const apiProducts = await getProducts();

    //  mapeo de API
    productosRopa = apiProducts.map((product) => ({
      id: product.id,
      nombre: product.title,
      categoria: {
        id: product.category.replace(/\s+/g, "").toLowerCase(),
        nombre: product.category,
      },
      precio: Math.round(product.price * 1000),
      imagen: product.image,
      cantidad: Math.floor(Math.random() * 50) + 1, // Cantidad aleatoria
      descripcion: product.description,
    }));

    // Cargar productos inicialmente
    loadProducts(productosRopa);
    titleMajor.innerHTML = `${colectionText}`;

    closeSpinner(containerSpinner, titleMajor);
    filterByCategory(productosRopa);
    initializeSearchInput(productosRopa);
  } catch (error) {
    console.error("Error al inicializar la app:", error);
    closeSpinner(containerSpinner, titleMajor);

    // Mostrar mensaje de error al usuario
    containerProducts.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h3>Error al cargar productos</h3>
        <p>Por favor, recarga la página</p>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", initializeApp);

//Funcion que carga los productos
function loadProducts(productos) {
  //antes de renderizar cada producto, vaciamos el contenedor
  containerProducts.innerHTML = ``;

  // foreach para que recorra el array, por cada producto se va a renderizar una card

  productos.forEach((producto) => {
    // primero creamos un div (document.createElement('div'), luego le agregamos la clase correspondiente (div.classList.add('clase'), despues el innerHTML
    const divProduct = document.createElement("div");
    divProduct.classList.add("product");
    divProduct.innerHTML = `<div class="card" id="${producto.id}">
      <div class="image">
        <img class="image-product" src="${producto.imagen}" alt="${
      producto.nombre
    }">
      </div>
      <div class="info-card">
        <div class="title-container">
          <p class="title">${producto.nombre}</p>
        </div>
        <div class="price-container">
          <p class="price">$ ${producto.precio.toLocaleString()}</p>
          <p class="verMas">Ver más</p>
          </div>
      </div>
    </div>`;
    containerProducts.append(divProduct);
  });
}

//filtro por categorias
function filterByCategory() {
  let prodFilters = [];
  btnCategories.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Capturar el evento antes del setTimeout
      const clickedButton = e.currentTarget;
      console.log("Botón clickeado:", clickedButton.id);
      // Mostrar spinner inmediatamente
      showSpinner(containerProducts, containerSpinner, titleMajor);

      // Deshabilitar todos los botones durante la carga
      btnCategories.forEach((btn) => (btn.disabled = true));

      // Ejecutar después de 1 segundo
      setTimeout(() => {
        console.log("productos ropa",productosRopa);
        try {
          if (clickedButton.id === "colectionAll") {
            prodFilters = productosRopa;
            titleMajor.innerHTML = `${colectionText}`;
          } else {
            console.log("nombre de la categoria",productosRopa[0].categoria.nombre);
            prodFilters = productosRopa.filter(
              (producto) =>
                producto.categoria.nombre.toLowerCase() === clickedButton.id
            );
            console.log(prodFilters)
            titleMajor.innerHTML = prodFilters[0].categoria.nombre; // muestra el nombre de la primera categoría del filtro
          }

          // Ocultar spinner
          closeSpinner(containerSpinner, titleMajor);
          // Cargar productos
          loadProducts(prodFilters);
          
          // Rehabilitar todos los botones
          btnCategories.forEach((btn) => (btn.disabled = false));
        } catch (error) {
          console.error("Error al filtrar productos:", error);
          // Ocultar spinner en caso de error
          closeSpinner(containerSpinner, titleMajor);
          // Rehabilitar botones en caso de error
          btnCategories.forEach((btn) => (btn.disabled = false));
        }
      }, 1100); // 1 segundo de delay
    });
  });
}

function initializeSearchInput() {
  inputSearch.addEventListener("keyup", (e) => {
    console.log('Palabra Ingresada: ', e.target.value);
    if (e.target.value.length == 0) {
      titleMajor.innerText = `${colectionText}`;
      loadProducts(productosRopa);
    }
    if (e.target.value.length > 1) {
      titleMajor.innerText = "Busqueda personalizada"
      const result = liveSearch(productosRopa, e.target.value);
      if (result.length == 0) {
        containerProducts.innerText = "No existen coincidencias con el término buscado."
        return;
      }
      loadProducts(result);
    }
  });
}


let sumCartLst = 0;

//funcion que verifica el local storage y actualiza el carrito.
function cartLocalStorage() {
  const productsCart = JSON.parse(localStorage.getItem("products-in-cart"));

  if (productsCart && productsCart.length > 0) {
    sumCartLst = productsCart.reduce(
      (acc, product) => acc + product.cantidad,
      0
    );

    // Habilitar el nav-div del carrito
    cartLink.href = "carrito.html";
    navDiv.style.pointerEvents = "auto";
    navDiv.style.opacity = "1";
    navDiv.style.cursor = "pointer";
    navDiv.classList.remove("cart-disabled");

    // IMPORTANTE: Remover todos los event listeners del carrito vacío
    cartLink.removeEventListener("click", handleEmptyCartClick);
    cartLink.onclick = null;

    console.log("Carrito habilitado - productos encontrados:", sumCartLst);
  } else {
    sumCartLst = 0;

    // Configurar carrito como vacío pero MANTENER eventos
    cartLink.href = "#";
    navDiv.style.opacity = "0.5";
    navDiv.style.cursor = "not-allowed";
    navDiv.classList.add("cart-disabled");

    // NO bloquear pointer events para permitir el click
    navDiv.style.pointerEvents = "auto";

    // Limpiar eventos previos antes de agregar nuevos
    cartLink.onclick = null;
    cartLink.removeEventListener("click", handleEmptyCartClick);

    // Agregar nuevo event listener
    cartLink.addEventListener("click", handleEmptyCartClick);

    console.log("Carrito deshabilitado - sin productos");
  }

  console.log("cantidad de productos en el local storage", sumCartLst);
  numberCart.innerText = sumCartLst;
}

cartLocalStorage();

//Funcion que agrega un producto al carrito
function AddToCart(e) {
  console.log("info de la card clickeada", e.target);
  const idButton = e.currentTarget.dataset.id;
  console.log("id del boton", idButton);
  //busco por id si algun producto tiene el valor del idbutton y lo guardo en una variable
  const productoAgregado = productosRopa.find(
    (producto) => producto.id == idButton
  );

  //verifico si el array tiene el elemento, si lo tiene sumo la cantidad (buscando por index), sino le asigno cant=1 y lo pusheo
  if (arrayCart.some((producto) => producto.id == idButton)) {
    const index = arrayCart.findIndex((producto) => producto.id == idButton);
    arrayCart[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    arrayCart.push(productoAgregado);
  }

  localStorage.setItem("products-in-cart", JSON.stringify(arrayCart));

  console.log("Producto agregado al localStorage:", arrayCart);
  console.log("Ejecutando cartLocalStorage() después de agregar...");

  cartLocalStorage();

  Toastify({
    text: "Producto agregado al carrito",
    duration: 2000,
    gravity: "bottom", // 'top' o 'bottom'
    position: "right", // 'left', 'center' o 'right'
    backgroundColor: "#4caf50",
    stopOnFocus: true,
  }).showToast();
}

const buttonModal = document.getElementById("dropModal");
const modal = document.querySelector(".modal");

//Funcion que abre el modal
function openModal(producto) {
  if (modal) {
    modal.classList.add("open");

    // Buscar el contenedor correcto (.contenido)
    const contentModal = modal.querySelector(".contenido");

    if (contentModal) {
      // Estructura del modal usando CSS Grid areas
      contentModal.innerHTML = `
        <div class="modal-image">
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        
        <div class="modal-info">
          <h2 class="modal-title">${producto.nombre}</h2>
        </div>
        <div class="modal-description">
        ${producto.descripcion}
        </div>
        <div class="modal-detalles">
        <div class="modal-price">
        $${producto.precio.toLocaleString()}
        </div>
        </div>
        <div class="modal-actions">
          <button class="modal-add-btn" data-id="${producto.id}">
            Agregar al carrito
          </button>
          <button id="dropModal">X</button>
        </div>
      `;

      // Agregar event listeners
      const modalAddBtn = contentModal.querySelector(".modal-add-btn");
      const closeBtn = contentModal.querySelector("#dropModal");

      if (modalAddBtn) {
        modalAddBtn.addEventListener("click", (e) => {
          AddToCart(e);
          closeModal();
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        });
      }
    }
  }
}

//Funcion que cierra el modal
function closeModal() {
  if (modal) {
    modal.classList.remove("open");

    // Limpiar el contenido del modal
    const contentModal = modal.querySelector(".contenido");
    if (contentModal) {
      contentModal.innerHTML = `
        <h2>modal de producto</h2>
        <button id="dropModal">Cerrar</button>
      `;

      // Volver a agregar el event listener al botón cerrar
      const newButtonModal = contentModal.querySelector("#dropModal");
      if (newButtonModal) {
        newButtonModal.addEventListener("click", (e) => {
          console.log("Botón cerrar clickeado");
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        });
      }
    }

    console.log("Modal cerrado y limpiado");
  } else {
    console.error("Modal no encontrado para cerrar");
  }
}

// Event listener para cerrar modal
if (buttonModal) {
  buttonModal.addEventListener("click", (e) => {
    console.log("Botón cerrar clickeado");
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });
  console.log("Event listener agregado al botón cerrar");
}

// Delegación de eventos para las cards (que se crean dinámicamente)
containerProducts.addEventListener("click", (e) => {
  // Verificar si el click fue en una card o dentro de una card
  const card = e.target.closest(".card");
  console.log(card);
  const id = card.id;
  if (card) {
    const producto = productosRopa.find((p) => p.id == id);

    console.log("Card clickeada, producto:", producto);
    openModal(producto);
  }
});

const inputSearch = document.getElementById("input");

//Evento para el input de búsqueda


//Funcion para la búsqueda de un producto por input
function liveSearch(productos, search) {
  if (!search.trim()) return productos;

  const searchLower = search.toLowerCase();
  const result = productos.filter((p) =>
    p.nombre.toLowerCase().includes(searchLower)
  );
  console.log("resultado:", result);
  return result;
}
