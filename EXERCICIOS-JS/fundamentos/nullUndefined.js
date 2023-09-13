let valor //Não inicializada
console.log(valor) //Resultado: undefined

valor = null //Ausência de Valor. Não aponta para nenhum espaço de memória
console.log(valor) //Resultado: null
// console.log(valor.toString()) //Resultado: TypeError: Cannot read properties of null (reading 'toString')

const produto = {}
console.log(produto.preco) //Resultado: undefined
console.log(produto) //Resultado: {}

produto.preco = 3.50
console.log(produto) //Resultado: { preco: 3.5 }

produto.preco = undefined //Evite atribuir undefined
console.log(!!produto.preco) //Resultado: Converteu para booleano false
console.log(produto) //Resultado: { preco: undefined }

produto.preco = null //Produto sem Preço
console.log(!!produto.preco) //Resultado: Converteu para booleano false
console.log(produto) //Resultado: { preco: null }