// Par Chave & Valor
const saudacao = 'Opa' //Contexto léxico 1

function exec() {
  const saudacao = 'Falaaa' //Contexto léxico 2
  return saudacao
}

//Objetos são grupos aninhados de pares Chave & Valor
const cliente = {
  nome: 'Pedro',
  idade: '32',
  peso: '124',
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)