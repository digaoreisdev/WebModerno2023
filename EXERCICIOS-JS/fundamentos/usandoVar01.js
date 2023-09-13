{
  {
    {
      {
        var sera = 'Será'
        console.log(sera) // Resultado: Será
      }
    }
  }
}
console.log(sera) // Resultado: Será

function teste(){
  var local = 123
}
teste()
// console.log(local) // Resultado: console.log(local) ReferenceError: local is not defined
//                                              ^
//Quando temos função, a variavel var fica dentro do scopo da função, não podem ser acessadas fora do escopo da função.
