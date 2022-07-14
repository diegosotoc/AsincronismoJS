import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

// otra forma en como usar async y await.

// logica de async:
// ir por datos y esperar informacion para retornarla.
async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}
const anotherFunction = async (urlApi) => {
    try {
        // llamado a TODOS los productos del API
        const products = await fetchData(`${urlApi}/products`);

        // llamado a un producto en particular, el numero 0.
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);

        // llamando a una categoria
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);