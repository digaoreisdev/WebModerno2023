// Armazenando em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b)
}
imprimirSoma(2, 3) //Resultado: 5

// Armazenando uma função Arrow em uma Variavel
const soma = (a, b) => {
  return a + b
}
console.log(soma(2, 3)) //Resultado: 5

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3)) //Resultado: -1

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!') //Resultado: Legal!!!