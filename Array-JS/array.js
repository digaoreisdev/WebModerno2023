// Array
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Calos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Calos', 'Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael' //Este comando funciona? SIM
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

// Algumas funções de Array
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Calos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)