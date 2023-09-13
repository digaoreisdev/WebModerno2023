//Função sem Retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3) //Resultado: 5
imprimirSoma(2) //Resultado: NaN - Note-a-Number
imprimirSoma(2, 10, 5, 6, 7, 8) //Resultado: 12
imprimirSoma() //Resultado: NaN - Note-a-Number

//Função com retorno
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3)) //Resultado: 5
console.log(soma(2)) //Resultado: 3
console.log(soma()) //Resultado: NaN - Note-a-Number