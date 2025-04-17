let limite = parseInt(prompt("Digite um número positivo:"));
if (!isNaN(limite) && limite > 0) {
    // WHILE
    let g = 1;
    while (g <= limite) {
        console.log(g);
        g++;
    }
    
    // FOR
    for (let h = 1; h <= limite; h++) {
        console.log(h);
    }
    
    // DO-WHILE
    let l = 1;
    do {
        console.log(l);
        l++;
    } while (l <= limite);
}
console.log("FIM");