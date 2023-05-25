//Importa o módulo http próprio do Node
import http from 'node:http'

//req - requisiçõs (request) | res - respostas (response)
//req - os dados que estão entrando 
//res - as respostas do servidor
const server = http.createServer((req, res) => {
  return res.end('Hello World')
})

//O servidor irá ficar olhando a porta 3333
server.listen(3333)