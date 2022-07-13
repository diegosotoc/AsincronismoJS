import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1/';


// POST: Enviar
// GET: Obtener
// PUT: Actualizar
// Delete: Eliminar

// Se encarga de usar fetch 
function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        // Cabecera, estamos haciendo una solicitud por medio 
        // de la consola.
        headers: {
            "Content-Type": "application/json",
        },
        // pasar la info que tenemos a un string
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "PRUEBA PRUEBA",
    "price": 999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

// Mostrar la informacion, se transofrma la respuesta en un
// objeto JSON
postData(`${API}products`, data)
  .then (response => response.json())
  .then(data => console.log(data))