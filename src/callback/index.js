// Funcion que pasa como argumento otra funcion.

function suma(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callBackSumar) {
    return callBackSumar(num1, num2);
}

console.log(calc(2,2,suma));

// setTimeout, ejecutar codigo en tiempo definido.

setTimeout(() => {console.log('Hola JS');}, 2000);



function gretting(name) {
    console.log(`Hola ${name}`);
}

//         funcion, tiempo, arg
setTimeout(gretting,2000,("Diego"));

