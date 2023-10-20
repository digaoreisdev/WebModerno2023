//callBack1
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

//Forma natural da função
console.log('Função na Forma Natural')
fabricantes.forEach(function(fabricante){
    console.log(`Fabricante: ${fabricante}`)
})

//Função Arrow
console.log('Função Arrow')
fabricantes.forEach(fabricante => console.log(`Fabricante: ${fabricante}`))