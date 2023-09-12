const escola = 'Cod3r'

console.log(escola.charAt(4)) //Resultado: r
console.log(escola.charAt(5)) //Resultado: 'Vazio'
console.log(escola.charCodeAt(3)) //Resultado: 51 (Código do caracter 3 na tabela unicode Asc)
console.log(escola.indexOf('3')) //Resultado: 3

console.log(escola.substring(1)) //Resultado: od3r
console.log(escola.substring(0, 3)) //Resultado: Cod

console.log('Escola '.concat(escola).concat('!')) //Resultado:Escola Cod3r!
console.log('Escola ' + escola + '!') //Resultado:Escola Cod3r!
console.log(`Escola ${escola}!`) //Resultado:Escola Cod3r!

console.log(escola.replace(3, 'e')) //Resultado: Coder
console.log(escola.replace(/\w/g, 'e')) //Resultado: eeeee

console.log('Ana,Maria,Pedro'.split(',')) //Resultado: [ 'Ana', 'Maria', 'Pedro' ]
console.log('Ana,Maria,Pedro'.split(/,/)) //Resultado: [ 'Ana', 'Maria', 'Pedro' ]