function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(8.1) //Resultado: Aprovado com 8.1
soBoaNoticia(6.1) //Resultado: Não retorna nada

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log('É verdade ' + valor)
  }
}

seForVerdadeEuFalo() //Resultado: undefined
seForVerdadeEuFalo(null) //Resultado: undefined
seForVerdadeEuFalo(undefined) //Resultado: undefined
seForVerdadeEuFalo(NaN) //Resultado: undefined
seForVerdadeEuFalo('') //Resultado: false
seForVerdadeEuFalo(0) //Resultado: false
seForVerdadeEuFalo(-1) //Resultado: É verdade -1
seForVerdadeEuFalo(' ') //Resultado: É verdade "Espaço vazio"
seForVerdadeEuFalo('?') //Resultado: É verdade ?
seForVerdadeEuFalo([]) //Resultado: É verdade "Objeto vazio"
seForVerdadeEuFalo([1, 2]) //Resultado: É verdade 1, 2
seForVerdadeEuFalo({}) //Resultado: É verdade [object object]