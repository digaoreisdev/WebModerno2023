console.log(Math.ceil(6.1)) //Resultado 7

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome) //Resultado Bola

function Obj(nome) {
  this.nome = nome
  this.exec = function(){
    console.log('Executando...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()