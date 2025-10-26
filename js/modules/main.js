import { productosRopa } from "../../data/products.js";

// <<<<<<<<<<<<<QuerySelectors>>>>>>>>>>>
//llamo al id del contenedor principal del index para manipular el doom
const contenedorProductos = document.getElementById("cont-products");
// array con todos los elementos de los selectores que tengan una clase ".li-button" 
const botonesCategorias = document.querySelectorAll(".li-button");
//elemento para modificar el titulo principal
const tituloPrincipal = document.getElementById("tit-principal");
const numberCart = document.querySelector("#number");
let arrayCart = JSON.parse(localStorage.getItem("products-in-cart")) || [];
const cartLink = document.querySelector("#cart-link");
const navDiv = document.querySelector(".nav-div:last-child"); // Selector correcto para el nav-div del carrito
// <<<<<<<<<<<<<QuerySelectors>>>>>>>>>>>


function cargarProductos(productos) {

  //antes de renderizar cada producto, vaciamos el contenedor 
  contenedorProductos.innerHTML = ``;

  // foreach para que recorra el array, por cada producto se va a renderizar una card

  productos.forEach(producto => {
    // primero creamos un div (document.createElement('div'), luego le agregamos la clase correspondiente (div.classList.add('clase'), despues el innerHTML
    const divProduct = document.createElement('div');
    divProduct.classList.add('product');
    divProduct.innerHTML = `<div class="card" id="${producto.id}">
      <div class="image">
        <img class="image-product" src="${producto.imagen}" alt="${producto.nombre}">
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
    contenedorProductos.append(divProduct)

  });
}

cargarProductos(productosRopa);

let prodFilters = [];

//filtro por categorias
botonesCategorias.forEach(button => {
  button.addEventListener('click', (e) => {

    if (e.currentTarget.id === "filterAll") {
      prodFilters = productosRopa;
      tituloPrincipal.innerHTML = "Todos nuestros productos";
    } else {
      prodFilters = productosRopa.filter(producto => producto.categoria.id.toLowerCase() === e.currentTarget.id);
      tituloPrincipal.innerHTML = prodFilters[0].categoria.nombre; // muestra el nombre de la primera categoría del filtro
    }
    cargarProductos(prodFilters);

  });

});

let sumCartLst = 0;

// Función para manejar click en carrito vacío
function handleEmptyCartClick(e) {
  e.preventDefault();
  console.log(e);

  Toastify({
    text: "⚠️ Agrega productos al carrito para continuar",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "#ff6b6b",
    className: "warning-toast",
    stopOnFocus: true,
  }).showToast();

  return false;
}

//funcion que verifica el local storage y actualiza el carrito.
const cartLocalStorage = () => {
  const productsCart = JSON.parse(localStorage.getItem("products-in-cart"));

  if (productsCart && productsCart.length > 0) {
    sumCartLst = productsCart.reduce((acc, product) => acc + product.cantidad, 0);

    // Habilitar el nav-div del carrito
    cartLink.href = "carrito.html";
    navDiv.style.pointerEvents = "auto";
    navDiv.style.opacity = "1";
    navDiv.style.cursor = "pointer";
    navDiv.classList.remove("cart-disabled");

    // IMPORTANTE: Remover todos los event listeners del carrito vacío
    cartLink.removeEventListener('click', handleEmptyCartClick);
    cartLink.onclick = null;

    console.log('Carrito habilitado - productos encontrados:', sumCartLst);
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
    cartLink.removeEventListener('click', handleEmptyCartClick);

    // Agregar nuevo event listener
    cartLink.addEventListener('click', handleEmptyCartClick);

    console.log('Carrito deshabilitado - sin productos');
  }

  console.log("cantidad de productos en el local storage", sumCartLst);
  numberCart.innerText = sumCartLst;
};

cartLocalStorage();

function AddToCart(e) {
  console.log("info de la card clickeada",e.target);
  const idButton = e.currentTarget.dataset.id;
  console.log("id del boton", idButton);
  //busco por id si algun producto tiene el valor del idbutton y lo guardo en una variable
  const productoAgregado = productosRopa.find(producto => producto.id == idButton);

  //verifico si el array tiene el elemento, si lo tiene sumo la cantidad (buscando por index), sino le asigno cant=1 y lo pusheo
  if (arrayCart.some(producto => producto.id == idButton)) {
    const index = arrayCart.findIndex(producto => producto.id == idButton)
    arrayCart[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    arrayCart.push(productoAgregado);
  }

  localStorage.setItem("products-in-cart", JSON.stringify(arrayCart));

  console.log('Producto agregado al localStorage:', arrayCart);
  console.log('Ejecutando cartLocalStorage() después de agregar...');

  cartLocalStorage();

  Toastify({
    text: "Producto agregado al carrito",
    duration: 2000,
    gravity: "bottom", // 'top' o 'bottom'
    position: "right", // 'left', 'center' o 'right'
    backgroundColor: "#4caf50",
    stopOnFocus: true,
  }).showToast();

};

const buttonModal = document.getElementById("dropModal");
const modal = document.querySelector(".modal");

function openModal(producto) {
  console.log('Se abre el modal para:', producto);

  if (modal) {
    modal.classList.add("open");
    console.log('Modal abierto');

    // Buscar el contenedor correcto (.contenido)
    const contenidoModal = modal.querySelector('.contenido');

    if (contenidoModal) {
      // Estructura del modal usando CSS Grid areas
      contenidoModal.innerHTML = `
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
        <div class="modal-talles">
        <p> Talles disponibles: </p>
        <div class="container-talles">
        <div class="elemento-talle">S</div>
        <div class="elemento-talle">M</div>
        <div class="elemento-talle">L</div>
        <div class="elemento-talle">XL</div>  
        </div>
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
      const modalAddBtn = contenidoModal.querySelector('.modal-add-btn');
      const closeBtn = contenidoModal.querySelector('#dropModal');

      if (modalAddBtn) {
        modalAddBtn.addEventListener('click', (e) => {
          AddToCart(e);
          closeModal();
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        });
      }

    }
  }

}

function closeModal() {

  if (modal) {
    modal.classList.remove("open");

    // Limpiar el contenido del modal
    const contenidoModal = modal.querySelector('.contenido');
    if (contenidoModal) {
      contenidoModal.innerHTML = `
        <h2>modal de producto</h2>
        <button id="dropModal">Cerrar</button>
      `;

      // Volver a agregar el event listener al botón cerrar
      const newButtonModal = contenidoModal.querySelector('#dropModal');
      if (newButtonModal) {
        newButtonModal.addEventListener("click", (e) => {
          console.log('Botón cerrar clickeado');
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        });
      }
    }

    console.log('Modal cerrado y limpiado');
  } else {
    console.error('Modal no encontrado para cerrar');
  }
}

// Event listener para cerrar modal
if (buttonModal) {
  buttonModal.addEventListener("click", (e) => {
    console.log('Botón cerrar clickeado');
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });
  console.log('Event listener agregado al botón cerrar');
}

// Delegación de eventos para las cards (que se crean dinámicamente)
contenedorProductos.addEventListener("click", (e) => {
  // Verificar si el click fue en una card o dentro de una card
  const card = e.target.closest(".card");
  console.log(card)
  const id = card.id;
  if (card) {
    const producto = productosRopa.find(p => p.id == id);

    console.log('Card clickeada, producto:', producto);
    openModal(producto);
  }
});

const cardModal = document.querySelectorAll(".modal-add-btn");