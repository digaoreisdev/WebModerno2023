//Novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: '5',
  endereco: {
    logradouro: 'Rua Abc',
    numero: 1000
  }
}

//Desestruturando com Chaves {}
const { nome, idade } = pessoa
console.log(nome, idade)

//Desestruturando com Chaves e trocando o nome das Variaveis
const { nome: n, idade: i } = pessoa
console.log(n, i)

//Acessando variaveis que não existem. Retorna undefined ou retorna o que foi setado como padrão.
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//Acessando subVariaveis
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)