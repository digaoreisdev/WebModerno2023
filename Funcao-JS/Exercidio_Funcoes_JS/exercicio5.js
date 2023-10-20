//Meu Exercicio 5 - Cópia
function formatarMoeda(valor) {
    formatarReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(formatarReais)
}

formatarMoeda(0.1 + 0.2)

//Resposta Professor
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)