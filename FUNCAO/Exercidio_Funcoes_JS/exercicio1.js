//Meu Exercício 1
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

operacoes(10, 20)

//Resposta Professor
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(10, 20)