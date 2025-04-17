// WHILE
let a = 0;
if (!isNaN(a)) {
    while (a <= 30) {
        console.log(a);
        a += 3;
    }
}
console.log("FIM");

// FOR
for (let b = 0; b <= 30; b += 3) {
    if (!isNaN(b)) console.log(b);
}
console.log("FIM");

// DO-WHILE
let c = 0;
if (!isNaN(c)) {
    do {
        console.log(c);
        c += 3;
    } while (c <= 30);
}
console.log("FIM");