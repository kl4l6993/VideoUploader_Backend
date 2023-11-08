//import json server
const jsonserver=require('json-server');

//import CORS
const cors=require('cors');

//creating json server
const server=jsonserver.create();

//creating middleware for coversion of json data to JS data

const middleware=jsonserver.defaults();

//create a router
const router=jsonserver.router('db.json')

//using middleware in server

server.use(middleware);

//10. using cors in server

server.use(cors());

//13. using router on server

server.use(router);

//setting port for running server

const PORT=5000;

//running server on this port

server.listen(PORT,()=>{
    console.log(`server started running successfully on port ${PORT}`)
})