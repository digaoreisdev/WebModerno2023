function operacoes(x, y) {
    soma = x + y
    sub = x - y
    mult = x * y
    div = x / y
    console.log(`
        Soma de X e Y = ${soma}
        Subtração de X e Y = ${sub}
        Multiplicação de X e Y = ${mult}
        Divisão de X e Y = ${div}
    `)
}

console.log(operacoes(10, 20))