const http = require('http');
// console.log(http);
const server = http.createServer((req,res)=>{
    console.log(req)
    res.write('Welcome to home page .')
res.end()})
server.listen(5000);