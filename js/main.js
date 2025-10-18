//array con los elementos, simula bbdd



const productosRopa = [
  {
    id: 1,
    nombre: "Camiseta Básica",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 25000,
    imagen: "./img/camisa-basica.jpg",
    cantidad: 32,
  },
  {
    id: 2,
    nombre: "Pantalón Vaquero",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 49000,
    imagen: "./img/pantalon-vaquero.jpg",
    cantidad: 15,
  },
  {
    id: 3,
    nombre: "Remera con Capucha",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 39000,
    imagen: "./img/remera-capucha.jpg",
    cantidad: 47,
  },
  {
    id: 4,
    nombre: "Vestido de Verano",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 59000,
    imagen: "./img/vestido-verano.jpg",
    cantidad: 28,
  },
  {
    id: 5,
    nombre: "Camisa Formal",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 12000,
    imagen: "./img/camisa-formal.jpg",
    cantidad: 50,
  },
  {
    id: 6,
    nombre: "Camisa Formal",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 35000,
    imagen: "./img/camisa-formal.jpg",
    cantidad: 50,
  },
  {
    id: 7,
    nombre: "Pantalón Chino",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 45000,
    imagen: "./img/pantalon-chino.jpg",
    cantidad: 22,
  },
  {
    id: 8,
    nombre: "Remera Deportiva",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 37000,
    imagen: "./img/remera-deportiva.jpg",
    cantidad: 39,
  },
  {
    id: 9,
    nombre: "Falda Midi",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 42000,
    imagen: "./img/falda-mini.jpg",
    cantidad: 18,
  },
  {
    id: 10,
    nombre: "Abrigo de Invierno",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 129000,
    imagen: "./img/abrigo-invierno.jpg",
    cantidad: 25,
  },
  {
    id: 11,
    nombre: "Camiseta de Manga Larga",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 29000,
    imagen: "./img/camiseta-larga.jpg",
    cantidad: 41,
  },
  {
    id: 12,
    nombre: "Pantalón de Vestir",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 55000,
    imagen: "./img/pantalon-vestir.jpg",
    cantidad: 36,
  },
  {
    id: 13,
    nombre: "Remera Oversize",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 41000,
    imagen: "./img/remera-overzise.jpg",
    cantidad: 19,
  },
  {
    id: 14,
    nombre: "Vestido de Noche",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 79000,
    imagen: "./img/vestido-noche.jpg",
    cantidad: 29,
  },
  {
    id: 15,
    nombre: "Chaqueta Bomber",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 89000,
    imagen: "./img/chaqueta-bomber.jpg",
    cantidad: 44,
  },  
  {
    id: 17,
    nombre: "Pantalón Cargo",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 52000,
    imagen: "./img/pantalon-cargo.jpg",
    cantidad: 38,
  },
  {
    id: 18,
    nombre: "Remera con Cremallera",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 44000,
    imagen: "./img/remera-cierre.jpg",
    cantidad: 16,
  },
  {
    id: 19,
    nombre: "Vestido de Fiesta",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 69000,
    imagen: "./img/vestido-fiesta.jpg",
    cantidad: 31,
  },
  {
    id: 20,
    nombre: "Abrigo de Lana",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 119000,
    imagen: "./img/abrigo-lana.jpg",
    cantidad: 49,
  },
  {
    id: 21,
    nombre: "Zapatillas Deportivas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 65000,
    imagen: "./img/zapatillas-deportivas.jpg",
    cantidad: 27,
  },
  {
    id: 22,
    nombre: "Zapatillas Urbanas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 58000,
    imagen: "./img/zapatilla-urbana.jpg",
    cantidad: 40,
  },
  {
    id: 23,
    nombre: "Zapatillas de Running",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 72000,
    imagen: "./img/zapatilla-running.jpg",
    cantidad: 24,
  },
  {
    id: 24,
    nombre: "Zapatillas de Baloncesto",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 85000,
    imagen: "./img/zapatilla-basket.jpg",
    cantidad: 33,
  },
  {
    id: 25,
    nombre: "Zapatillas de Tenis",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 78000,
    imagen: "./img/zapatilla-tenis.jpg",
    cantidad: 12,
  },
  {
    id: 26,
    nombre: "Zapatillas de Skate",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 62000,
    imagen: "./img/zapatilla-skate.jpg",
    cantidad: 46,
  },
  {
    id: 27,
    nombre: "Zapatillas de Senderismo",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 90000,
    imagen: "./img/zapatilla-senderismo.jpg",
    cantidad: 20,
  },
  {
    id: 28,
    nombre: "Zapatillas Clásicas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 55000,
    imagen: "./img/zapatillas-clasicas.jpg",
    cantidad: 37,
  },
  {
    id: 29,
    nombre: "Zapatillas de Moda",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 68000,
    imagen: "./img/zapatilla-moda.jpg",
    cantidad: 14,
  },
  {
    id: 30,
    nombre: "Zapatillas Premium",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 110000,
    imagen: "./img/zapatilla-premium.jpg",
    cantidad: 43,
  },
];


// querySelectors ......................

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


// querySelectors ......................


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
          <button class="productAddBtn" id="${producto.id}">Agregar al carrito</button>
        </div>
      </div>
    </div>`

    //insertamos el contenedor creado
    contenedorProductos.append(divProduct)

  });
  actButtons();
}

cargarProductos(productosRopa);


//filtro por categorias
botonesCategorias.forEach(button => {
  button.addEventListener('click', (e) => {



    if (e.currentTarget.id === "filterAll") {
      prodFilters = productosRopa;
      tituloPrincipal.innerHTML = "Todos los productos";
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


const cartLocalStorage = () => {
  const productsCart = JSON.parse(localStorage.getItem("products-in-cart"));
  
  if (productsCart && productsCart.length > 0) {
    // Hay productos en el carrito - HABILITAR
    sumCartLst = productsCart.reduce((acc, product) => acc + product.cantidad, 0);
    
    // Habilitar el nav-div del carrito
    cartLink.href = "carrito.html";
    navDiv.style.pointerEvents = "auto";
    navDiv.style.opacity = "1";
    navDiv.style.cursor = "pointer";
    navDiv.classList.remove("cart-disabled");
    
    // Remover evento de click bloqueado si existe
    cartLink.onclick = null;
    
  } else {
    // No hay productos - BLOQUEAR
    sumCartLst = 0;
    
    // Bloquear el nav-div del carrito
    cartLink.href = "#";
    navDiv.style.pointerEvents = "none";
    navDiv.style.opacity = "0.5";
    navDiv.style.cursor = "not-allowed";
    navDiv.classList.add("cart-disabled");
    
    // Prevenir navegación y mostrar mensaje
    cartLink.onclick = (e) => {
      e.preventDefault();
      
      // Mostrar notificación con Toastify
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
    };
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

