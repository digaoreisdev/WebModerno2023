//Meu Exercicio 6
function calculaJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)        
}

console.log(calculaJurosSimples(100, 10/100, 2))

function calculaJurosComposto(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}

console.log(calculaJurosComposto(100, 10/100, 2))

//Respota Professor
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));