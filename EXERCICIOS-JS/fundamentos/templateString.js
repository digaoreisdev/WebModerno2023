const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
  Olá
  ${nome}!`
console.log(concatenacao, template)

//Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //Função Arow
console.log(`Ei... ${up('cuidado')}!`) //Template String pode invocar uma função