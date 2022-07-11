// Como funciona el asincronismo.
// JS ejecuta de manera lineal programa.
// el setTimeOut es una tarea del navegator (WEB API)
// JS envia la tarea al navegador y sigue ejecutando sus tareas
// siempre JS irá ejecutando sus tareas mientras manda sus funciones 
// al navegador
// https://gyazo.com/d0843058766a0694f4e9d87dac9d15d0

console.log('Taco 1'); 
console.log('Taco 2'); 
console.log('Taco 3'); 
setTimeout(()=>
{
    console.log("TORTA");
}, 0)
console.log('Taco 4'); 
console.log('Taco 5'); 
console.log('Taco 6'); 