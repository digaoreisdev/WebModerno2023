const imprimiResultado = function (nota) {
  switch (Math.floor(nota)){
    case 10:
    case 9:
      console.log('Quadro de Honra ' + nota)
      break
    case 8: case 7:
      console.log('Aprovado ' + nota)
      break
    case 6: case 5: case 4:
      console.log('Recuperação ' + nota)
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado ' + nota)
      break
    default:
      console.log('Nota Inválida ' + nota)
  }
}

imprimiResultado(10) //Resultado: Quandro de Honra 10
imprimiResultado(8.9) //Resultado: Aprovado 8.9
imprimiResultado(6.55) //Resultado: Recuperação 6.55
imprimiResultado(2.3) //Resultado: Reprovado 2.2
imprimiResultado(-1) //Resultado: Nota Inválida -1
imprimiResultado(11) //Resultado: Nota Inválida 11