if (condição) {
  // Este é um bloco de código
  // Todas as sentenças de código dentro deste bloco
  // serão executadas se a condição for verdadeira.
  sentença1;
  sentença2;
  // ...
}
// Este é o código fora do bloco do if.

{
  // Sentenças de código aqui
  // Elas estão dentro do bloco
}

if (condição) {
  // Este é um bloco de código dentro de um if
  // As sentenças de código aqui serão executadas se a condição for verdadeira
}

for (let i = 0; i < 5; i++) {
  // Este é um bloco de código dentro de um loop for
  // As sentenças de código aqui serão repetidas enquanto a condição do loop for verdadeira
}

// Exemplo 1: Bloco Dentro de Outro Bloco (Aninhamento Simples)
// Neste exemplo, temos um bloco dentro de outro, que é um padrão comum em estruturas condicionais ou loops.
if (condicaoExterna) {
  // Bloco externo
  // Este bloco será executado se a condição externa for verdadeira
  
  if (condicaoInterna) {
      // Bloco interno
      // Este bloco será executado se a condição interna for verdadeira
  }
  
  // Mais código no bloco externo
}

// **Exemplo 2: Blocos em Loop (Aninhamento de Loop)**
// Este exemplo demonstra um loop **`for`** dentro de outro loop **`for`**. Isso pode ser útil para iterações mais complexas.
for (let i = 0; i < 3; i++) {
    // Bloco externo do primeiro loop
    
    for (let j = 0; j < 2; j++) {
        // Bloco interno do segundo loop
    }
    
    // Mais código no bloco externo do primeiro loop
}

// **Exemplo 3: Função com Blocos Aninhados**
// Funções também podem conter blocos aninhados, que podem ser usados para organizar o código e controlar o escopo de variáveis.
function exemploFuncao() {
    // Bloco da função
    
    if (condicao) {
        // Bloco interno do if
    }
    
    // Mais código no bloco da função
}