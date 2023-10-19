//Meu Exercício 4
function divisaoComResto(dividendo, divisor) {
    div = dividendo / divisor
    resto = dividendo % divisor
    console.log(`Divisão: ${Math.floor(div)}`)
    console.log(`Resto: ${resto}`)
}

divisaoComResto(11, 4)

//Resposta do Professor
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)