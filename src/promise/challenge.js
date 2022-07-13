// Para usar fetch es necesario correr este comando en la consola del proyecto
// npm i node-fetch

import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'


function fetchData(urlApi){
    return fetch(urlApi);
}

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))


/*
    // Llamado
    // fetch por defecto es una promesa, no se usa el new promise
    fetchData(`${API}/products`)
    // transformar la informacion del primer llamado a products a un .json
        .then(response => response.json())
        // mostrarlo
        .then(products =>{
            console.log(products);
        })
        // then vacio, muestra de como se anidan
        .then(()=>{
            console.log('Hola');
        })
        .catch(error => console.log(error));
*/