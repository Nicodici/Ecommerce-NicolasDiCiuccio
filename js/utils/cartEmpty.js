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

export {handleEmptyCartClick}