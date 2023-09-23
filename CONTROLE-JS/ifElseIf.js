Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
  if(nota.entre(9, 10)) {
    console.log('Quadro de Honra')
  } else if(nota.entre(7, 8.99)) {
    console.log('Aprovado')
  } else if(nota.entre(4, 6.99)) {
    console.log('Recuperação')
  } else if(nota.entre(0, 3.99)) {
    console.log('Reprovado')
  } else {
    console.log('Nota inválida')
  }
}

imprimirResultado(10) //Resultado: Quadro de Honra
imprimirResultado(8.9) //Resultado: Aprovado
imprimirResultado(6.55) //Resultado: Recuperação
imprimirResultado(2.3) //Resultado: Reprovado
imprimirResultado(-1) //Resultado: Nota inválida
imprimirResultado(11) //Resultado: Nota inválida