// Melhorias sobre Notação Literal de Objetos - ES 2015
const a = 1
const b = 2
const c = 3

//Anteriormente
const obj1 = { a: a, b: b, c: c }
//Após ES 2015
const obj2 = { a, b, c }
console.log(obj1, obj2)

// Outra Melhoria - Criar dinamicamente um atributo usando uma string
//Anteriormente
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// Após ES 2015
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//Como definir funções dentro de um objeto literal ES 2015
const obj5 = {
    // Anteriormente
    funcao1: function() {
        //...
    },
    //Após Es 2015
    funcao2() {
        //...
    }
}

console.log(obj5)

