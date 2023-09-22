function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
//Retornar valores aleatórios entre 40 e 50.
console.log(rand(obj))
//Retornar valores aleatórios entre 955 e 100.
console.log(rand({ min: 955 }))
//Retornar valores aleatórios entre 0 e 100.
console.log(rand({}))

// console.log(rand()) - Gera problema pois min e max returnam undefined