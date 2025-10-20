import { productosRopa } from "../../data/products.js";

// <<<<<<<<<<<<<QuerySelectors>>>>>>>>>>>
//llamo al id del contenedor principal del index para manipular el doom
const contenedorProductos = document.getElementById("cont-products");
// array con todos los elementos de los selectores que tengan una clase ".li-button" 
const botonesCategorias = document.querySelectorAll(".li-button");
//elemento para modificar el titulo principal
const tituloPrincipal = document.getElementById("tit-principal");
//array con todos los elementos que tengan un selector llamado ".cart-button"
let prodAgregar = document.querySelectorAll(".cart-button");
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
    divProduct.innerHTML = `<div class="card">
      <div class="image">
        <img class="image-product" src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="info-card">
        <div class="title-container">
          <p class="title">${producto.nombre}</p>
        </div>
        <div class="price-container">
          <p class="price">$ ${producto.precio.toLocaleString()}</p>
        </div>
        <div class="button-container">
          <button class="productAddBtn" id="${producto.id}">Agregar</button>
        </div>
      </div>
    </div>`

    //insertamos el contenedor creado
    contenedorProductos.append(divProduct)

  });
  actButtons();
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

//funcion que va a actualizar los botones creados, ya que cuando actualizamos de categoria, los buttons viejos se borran y se crean nuevos
//la funcion se llama al final de la function que carga los elementos
function actButtons() {
  prodAgregar = document.querySelectorAll(".productAddBtn")
  prodAgregar.forEach(button => {
    button.addEventListener("click", AddToCart)
  })
}

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

  //en la variable idButton le asigno el id del boton "Agregar" correspondiente.
  const idButton = e.currentTarget.id;
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