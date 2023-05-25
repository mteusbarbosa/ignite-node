import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {

  const { method, url } = req

  if(method === 'GET' && url === '/users'){
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))

  }

  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      name: 'Mateus Barbosa',
      email: "mateus.bm13@gmail.com"
    })
    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

//O servidor irá ficar olhando a porta 3333
server.listen(3333)