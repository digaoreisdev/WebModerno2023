let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//Criando uma variavel sem CONST, VAR ou LET
abc = 3 // Não faça isso
console.log(global.abc)

//module.exports = { e: 456, f: false, g: 'Teste' }