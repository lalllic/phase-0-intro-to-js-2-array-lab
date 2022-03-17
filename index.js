// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function reset() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyAppendCat(name) {
    return cats.push(name);
}

reset();
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

reset();
function destructivelyRemoveLastCat() {
    return cats.pop();
}

reset();
function destructivelyRemoveFirstCat() {
    return cats.shift();
}

reset();
function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {
    let newCats = [...cats.slice(0, -1)];
    return newCats;
}

function removeFirstCat() {
    let newCats = [...cats.slice(1)];
    return newCats;
}