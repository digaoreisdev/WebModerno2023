const valores = [7.7, 8.9, 6.3, 9.2] //Cria o Array Valores
console.log(valores[0], valores[3]) //Resultado: 7.7 9.2
console.log(valores[4]) //Resultado: undefined

valores[4] = 10 // Adiciona o valor 10 no indice 4 do Array
console.log(valores) //Resultado: [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(valores.length) //Tamanho do Array = 5 elementos

valores.push({id: 3}, false, null, 'teste')//Push adiciona elementos no Array valores
console.log(valores) //Resultado: [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste' ]

console.log(valores.pop()) //Resultado: [ 'teste' ]
delete valores[0] // Remove o primeiro elemento (com base no índice informado)
console.log(valores) //Resultado: [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, null ]

console.log(typeof valores)