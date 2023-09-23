function tratarErroLancar(erro) {
  throw new Error('Tratando')
  // throw 10 - Resultao throw 10
  // throw true - Resultao throw true
  // throw 'mensagem' - Resultao throw mensagem
  // throw {
  //   nome: erro.name,
  //   msg: erro.message,
  //   date: new Date
  // }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroLancar(e)    
  } finally {
    console.log('Final')
  }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)