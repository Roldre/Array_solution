const http = require('http')

const serv = http.createServer((req, res)=>{

   console.log(res) 
res.write("This is my homePage")
res.end()

})
 
serv.listen(5000)
