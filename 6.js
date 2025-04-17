// WHILE
let m = 30;
if (!isNaN(m)) {
    while (m >= 1) {
        if (m % 4 === 0) console.log(`[${m}]`);
        else console.log(m);
        m--;
    }
}
console.log("FIM");

// FOR
for (let n = 30; n >= 1; n--) {
    if (!isNaN(n)) {
        if (n % 4 === 0) console.log(`[${n}]`);
        else console.log(n);
    }
}
console.log("FIM");

// DO-WHILE
let o = 30;
if (!isNaN(o)) {
    do {
        if (o % 4 === 0) console.log(`[${o}]`);
        else console.log(o);
        o--;
    } while (o >= 1);
}
console.log("FIM");