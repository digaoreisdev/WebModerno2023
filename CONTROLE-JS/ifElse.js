const imprimirResultado = function(nota) {
  if(nota >= 7) {
    console.log(`Média: 7 - Nota Atual: ${nota} - Resultado: Aprovado`)
  } else {
    console.log(`Média: 7 - Nota Atual: ${nota} - Resultado: Reprovado`)
  }
}

imprimirResultado(10) //Média: 7 - Nota Atual: 10 - Resultado: Aprovado
imprimirResultado(4) //Média: 7 - Nota Atual: 4 - Resultado: Reprovado
imprimirResultado('Epa!') //Média: 7 - Nota Atual: Epa! - Resultado: Reprovado
//Cuidado com a tipagem das váriaveis em JS