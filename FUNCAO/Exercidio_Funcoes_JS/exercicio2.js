//Meu Exercício 2
function criarTriangulo(x, y, z) {
    
    if(x == y && x == z) {
        console.log(`Seu Triangulo classifica-se como Equilátero`)
    } else if((x == y && x != z) || (x != y && y == z) || (x == z && y != z)) {
        console.log(`Seu Triangulo classifica-se como Isósceles`)
    } else if(x != y && x != z) {
        console.log(`Seu Triangulo classifica-se como Escaleno`)
    } else {
        console.log('Preciso verificar!')
    }
}

criarTriangulo(5, 5, 5)
criarTriangulo(5, 5, 10)
criarTriangulo(5, 10, 15)
criarTriangulo(5, 10, 10)
criarTriangulo(5, 10, 5)

//Resposta Professor
function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(5, 5, 5));
console.log(classificaTriangulo(5, 5, 10));
console.log(classificaTriangulo(5, 10, 15));
console.log(classificaTriangulo(5, 10, 10));
console.log(classificaTriangulo(5, 10, 5));