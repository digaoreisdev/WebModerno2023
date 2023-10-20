//This e Bind 2
// Apontando para a função Pessoa através da Constante self
function Pessoa(){
    this.idade = 0
    
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

// Apontando para a função Pessoa2 através da função bind()
function Pessoa2(){
    this.idade = 0
    
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }.bind(this), 1000)
}

new Pessoa2