function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value); // imrpime 1
console.log(g.next().value); // imrpime 2
console.log(g.next().value); // imrpime 3

///////////////////////////////////////////////////


function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Diego","Yi","An",]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);