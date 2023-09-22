console.log('01)', '1' == 1) //true - == Compara Valores
console.log('02)', '1' === 1) //false - === Compara Valores e Tipos
console.log('03)', '3' != 3) //false - != Compara valores
console.log('04)', '3' !== 3) //true - !== Compara Valores e Tipos

console.log('05)', 3 < 2) //false
console.log('06)', 3 > 2) //true
console.log('07)', 3 <= 2) //false
console.log('08)', 3 >= 2) //true

const d1 = new Date(0) //Zero significa a data de referência no JS, 01/01/1970.
const d2 = new Date(0)

console.log('09)', d1 === d2) //false - Neste caso compara referência de memória
console.log('10)', d1 == d2) //false - Neste caso compara referência de memória
console.log('11)', d1.getTime() === d2.getTime()) //true - Os dois possuem mesmo tipo e valor, então == daria true também

console.log('12)', undefined == null) //true
console.log('13)', undefined === null) //false