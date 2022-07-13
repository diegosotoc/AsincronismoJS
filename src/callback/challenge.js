// Soporte en todos los navegadores...
// XMLHTTPREQUEST COMO USARLO.

const XMLHttpRequest  = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET',urlApi, true); // tipo de peticion, url, habilitar
    xhttp.onreadystatechange = function(event){
        // Este estadoe esta constantemenrte cambiando
        // Por lo que es normal que un else se active...
        if (xhttp.readyState === 4) {
            // 0: No inicializado, 1: Loading, 2: Cuando ya se ejecuto
            // 3: Interactuando, 4: Cuando se ha completado la llamada

            if (xhttp.status === 200) {
                //200 = solicitud correcta. 
                // documentancion: https://developer.mozilla.org/es/docs/Web/HTTP/Status
                callback(null, JSON.parse(xhttp.responseText));
                // transformando objeto a texto JSON...
            } else{
                // regresando un error en el APi
                const error = new Error('ERROR' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

// Anidando llamadas, 3 peticiones con 3 datos distintos.
// Callback hell: anidar mucho.

// desde aqui se llaman los productos
// analizando el URL: https://api.escuelajs.co/api/v1/products
// API = https://api.escuelajs.co/api/v1

fetchData(`${API}/products`, function (error1, data1) {
    // si me ha regresado un error, dentenga toda la ejecucion
    if (error1) return console.error(error1);
    // llamando un producto en peculiar
    // Se invoca a fetchData para acceder a un objeto puntual.
    // que trabjo anteriormente el API
    // producto 0, se llama al id.
    fetchData(`${API}/products/${data1[1].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        // se hace el uso del optional chaining, en caso de un error
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[1]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

// como pedirlo en node: node ./challenge.js
// agregarlo en el JSON.  
// "scripts": {
//     "callback": "node src/callback/challenge.js"
//   }

// luego ejecutar: npm run callback

// if(true):
//    print("hello world")