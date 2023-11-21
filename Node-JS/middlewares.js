// Middleware pattern (chain of responsibility)
const passo1 = (contexto, next) => {
  contexto.valor = 'mdi1'
  next()
}

const passo2 = (contexto, next) => {
  contexto.valor2 = 'mdi2'
  next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const executa = (contexto, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length && 
      middlewares[indice](contexto, () => execPasso(indice +1))
  }
  execPasso(0)
}

const contexto = {}
executa(contexto, passo1, passo2, passo3)
console.log(contexto)