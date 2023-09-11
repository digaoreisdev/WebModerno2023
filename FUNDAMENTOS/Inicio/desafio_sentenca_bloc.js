/*
  Exibir os números ímpares e pares.
  Bloco 1
  1, 3, 5, 7, 9
  
  Bloco 2
  2, 4, 6, 7, 8, 10
*/
//Código utilizado na aula:
{
  console.log(1)
  console.log(3)
  console.log(5)
  console.log(7)
  console.log(9)
}
{
  console.log(2)
  console.log(4)
  console.log(6)
  console.log(8)
  console.log(10)
}

//Meu código:
{
  console.log('{ Bloco01 - Números ímpares:')
  for(let i = 1; i < 11;i++) 
  {
    if(i % 2 != 0)
    {
      console.log(`Número: ${i}`)
    }
  }
  console.log('}')
}
{
  console.log('{ Bloco02 - Números Pares:')
  for(let i = 1; i < 11;i++) 
  {
    if(i % 2 == 0)
    {
      console.log(`Número: ${i}`)
    }
  }
  console.log('}')
}