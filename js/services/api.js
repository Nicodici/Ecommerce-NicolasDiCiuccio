async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data[0].category);
        return data;
    } catch (error) {
        console.error(' Error al obtener productos:', error);
        throw error;
    }
}
export { getProducts };