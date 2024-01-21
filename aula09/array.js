let valores = [2, 4, 8, 7, 6, 5, 3]
/* Maneira tradicional de usar array
for ( let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Maneira mais moderna

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(6)
console.log(`o valor 6 está na posição ${pos}`)
