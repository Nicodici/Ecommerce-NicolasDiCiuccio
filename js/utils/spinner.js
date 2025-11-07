

function showSpinner(containerProducts, containerSpinner, tituloPrincipal) {
  containerProducts.innerText = "";
  containerSpinner.style.display = "flex";
  tituloPrincipal.style.display = "none";
}

function closeSpinner(containerSpinner, tituloPrincipal) {
  containerSpinner.style.display = "none";
  tituloPrincipal.style.display = "flex";
}

export {showSpinner, closeSpinner}