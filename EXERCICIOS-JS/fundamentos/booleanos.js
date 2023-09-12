let isAtivo = false
console.log(isAtivo) //Resultado: false

isAtivo = true
console.log(isAtivo) //Resultado: true

isAtivo = 1
console.log(!!isAtivo) //Resultado: true
console.log(!isAtivo) //Resultado: false
// Com uma (!) esclamação o número 1 se comporta como Falso - false
// Com duas (!!) esclamações o número 1 se comporta como verdadeiro - true

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')