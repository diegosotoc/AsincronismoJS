const fnAsync = () => {
    return new Promise((resolve,reject) => {
        // IF ternario...
        (true)
         ? setTimeout(() => resolve('Async!!'), 2000)
         : reject(new Error ("ERROR!"));
    });
}

// Async en el cuerpo de la funcion
const anotherFn = async() => {
    // await dentro de la logica
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherFn()
console.log('After');