// WHILE
let x = 10;
if (!isNaN(x)) {
    while (x >= 1) {
        console.log(x);
        x--;
    }
}
console.log("FIM");

// FOR
for (let y = 10; y >= 1; y--) {
    if (!isNaN(y)) console.log(y);
}
console.log("FIM");

// DO-WHILE
let z = 10;
if (!isNaN(z)) {
    do {
        console.log(z);
        z--;
    } while (z >= 1);
}
console.log("FIM");