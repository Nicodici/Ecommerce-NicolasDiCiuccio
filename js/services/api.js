async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        // console.log('📦 Productos obtenidos de la API:');
        // console.log(data);
        return data;
    } catch (error) {
        console.error('❌ Error al obtener productos:', error);
        throw error; // Re-lanzar el error para que se pueda manejar en main.js
    }
}

// Exportar la función para que pueda ser importada
export { getProducts };