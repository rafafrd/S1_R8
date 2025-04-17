// WHILE
let d = 50;
if (!isNaN(d)) {
    while (d >= 0) {
        console.log(d);
        d -= 5;
    }
}
console.log("FIM");

// FOR
for (let e = 50; e >= 0; e -= 5) {
    if (!isNaN(e)) console.log(e);
}
console.log("FIM");

// DO-WHILE
let f = 50;
if (!isNaN(f)) {
    do {
        console.log(f);
        f -= 5;
    } while (f >= 0);
}
console.log("FIM");