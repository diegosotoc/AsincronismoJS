// Soporte en todos los navegadores...
// XMLHTTPREQUEST COMO USARLO.

const XMLHTTPRequest = require('xmlhttprequest');
const API = ' https://api.escuelajs.co/api/v1';

function fetchDara(urlApi, callback) {
    let xhttp = new XMLHTTPRequest();
                
    xhttp.open('GET',urlApi, true); // tipo de peticion, url, habilitar
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4) {
            // 0: No inicializado, 1: Loading, 2: Cuando ya se ejecuto
            // 3: Interactuando, 4: Cuando se ha completado la llamada

            if (xhttp.status === 200) {
                //200 = solicitud correcta. 
                // documentancion: https://developer.mozilla.org/es/docs/Web/HTTP/Status
                callback(null, JSON.parse(xhttp.resposeText));
                // transformando objeto a texto JSON...
            }
            
        } else{
            // regresando un error en el APi
            const error = new Error('ERROR' + urlApi);
            return callback(error, null);
        }
    }

    xhttp.send();
}