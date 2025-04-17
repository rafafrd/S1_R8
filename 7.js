let inicio = parseInt(prompt("Primeiro valor:"));
let fim = parseInt(prompt("Último valor:"));
let incremento = parseInt(prompt("Incremento:"));

if (!isNaN(inicio) && !isNaN(fim) && !isNaN(incremento) && incremento !== 0) {
    // WHILE
    let p = inicio;
    if (inicio <= fim) {
        while (p <= fim) {
            console.log(p);
            p += incremento;
        }
    } else {
        while (p >= fim) {
            console.log(p);
            p += incremento;
        }
    }
    
    // FOR
    if (inicio <= fim) {
        for (let q = inicio; q <= fim; q += incremento) {
            console.log(q);
        }
    } else {
        for (let q = inicio; q >= fim; q += incremento) {
            console.log(q);
        }
    }
    
    // DO-WHILE
    let r = inicio;
    if (inicio <= fim) {
        do {
            console.log(r);
            r += incremento;
        } while (r <= fim);
    } else {
        do {
            console.log(r);
            r += incremento;
        } while (r >= fim);
    }
}
console.log("FIM");