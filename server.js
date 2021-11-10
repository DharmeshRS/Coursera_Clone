// import path from 'path'
const PORT=3000
const path=require('path')
//import json serVer
const jsonServer=require('json-server')

const server=jsonServer.create()

const router=jsonServer.router(path.join(__dirname,'db.json'))

const middlewares=jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/api',router)
server.listen(PORT,()=>console.log(`JSON Server is running on port ${PORT}`))