let productsCart = JSON.parse(localStorage.getItem("products-in-cart"));
console.log("product carts", productsCart);

const cartEmpty = document.getElementById("cartEmpty");
const clearCartButton = document.getElementById("clearCartBtn");
const cartContainer = document.getElementById("cart-products");
const divActions = document.querySelector(".cart-actions-total");
const totalPrice = document.getElementById("total-price");
const totalQuantity = document.getElementById("total-quantity");

function renderCart(products) {
    if (products === null || products.length === 0) {
        cartEmptyRedirect(products);
        return;
    }

    cartContainer.innerHTML = ``; // Primero limpio el html del contenedor

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("div-cart-product");

        productDiv.innerHTML = `
        <div class="product-details">
            <img class="image-cart" src="${product.imagen}" alt="${product.nombre}">
            <h3 class="product-name">${product.nombre}</h3>
            <p class="product-quantity">Cant: ${product.cantidad}</p>
            <p class="product-price">$${product.precio.toLocaleString()}</p>
            <button class="delete-btn" id="${product.id}">
                <img src="./img/delete.png" alt="Eliminar">
            </button>
        </div>
        `;

        cartContainer.append(productDiv);
    });


    const total = products.reduce((acc, product) => {
        return acc + product.precio * product.cantidad;
    }, 0);
    totalPrice.innerText = `Importe total: $${total}`; // Actualizar el precio total

    totalQuantity.innerText = `Cantidad de productos: ${products.reduce((acc, product) => acc + product.cantidad, 0)}`; // Actualizar la cantidad total
}

renderCart(productsCart);

// Función para limpiar el carrito
function clearCart() {
    const productCount = productsCart ? productsCart.length : 0;
    
    localStorage.clear();
    productsCart = [];
    
    // Notificación de carrito vaciado
    if (productCount > 0) {
        Toastify({
            text: `🧹 Carrito vaciado (${productCount} productos eliminados)`,
            duration: 4000,
            gravity: "top",
            position: "center",
            backgroundColor: "#ffa726",
            className: "clear-cart-toast",
            stopOnFocus: true,
            onClick: function(){
                console.log("Notificación de carrito vaciado clickeada");
            }
        }).showToast();
    }
    
    cartEmptyRedirect(productsCart);
    console.log("Carrito vaciado");
}

clearCartButton.addEventListener("click", clearCart);

// Delegación de eventos para los botones de eliminar
cartContainer.addEventListener("click", (e) => {
    // Verificar si el elemento clickeado es un botón de eliminar
    if (e.target.closest(".delete-btn")) {
        const deleteButton = e.target.closest(".delete-btn");
        const productId = parseInt(deleteButton.id);

        // Encontrar y eliminar el producto del array
        const index = productsCart.findIndex(product => product.id === productId);

        if (index !== -1) {
            const deletedProduct = productsCart[index];
            productsCart.splice(index, 1);
            localStorage.setItem("products-in-cart", JSON.stringify(productsCart));

            // Actualizar la variable global y re-renderizar
            productsCart = JSON.parse(localStorage.getItem("products-in-cart")) || [];
            renderCart(productsCart);

            console.log(`Producto con ID ${productId} eliminado del carrito`);
            
            // Notificación de producto eliminado
            Toastify({
                text: `🗑️ "${deletedProduct.nombre}" eliminado del carrito`,
                duration: 3000,
                gravity: "bottom",
                position: "right",
                backgroundColor: "#ff6b6b",
                className: "delete-toast",
                stopOnFocus: true,
                onClick: function(){
                    console.log("Notificación de eliminación clickeada");
                }
            }).showToast();
        }
    }
});


//funcion que se ejecuta cuando el carrito esta vacio
const cartEmptyRedirect = (productsCart) => {

    if (productsCart === null || productsCart.length === 0) {
        cartContainer.classList.add("cart-font-color");
        cartContainer.innerText = `No hay productos en el carrito
        Será redireccionado al menu principal en 3 segundos`;
        divActions.style.visibility = "hidden";
    }
    setTimeout(() => {
        window.location.href = "/index.html"; // Reemplaza "/index.html" con la ruta correcta a tu página principal
    }, 2000);
}