import http from 'http'

const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    res.end(`<h1>Bu sahifa Bosh sahifa</h1>`)
  }else if(req.url==="/about"){
    res.end(`<h1>Bu Biz haqimizdagi sahifa</h1>`)
  }else if(req.url==='/contact'){
    res.end(`<h1>Bu Biz bilan bog'lanish sahifasi</h1>`)
  }
})  
server.listen(3000,()=>{
console.log("sever 3000-port da ishlayapti")
})