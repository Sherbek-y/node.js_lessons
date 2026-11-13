// import http from 'http'

// const server=http.createServer((req,res)=>{
//   // if(req.url==="/"){
//   //   res.end(`<h1>Bu sahifa Bosh sahifa</h1>`)
//   // }else if(req.url==="/about"){
//   //   res.end(`<h1>Bu Biz haqimizdagi sahifa</h1>`)
//   // }else if(req.url==='/contact'){
//   //   res.end(`<h1>Bu Biz bilan bog'lanish sahifasi</h1>`)
//   // }
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

// res.write('<h2>1. Birinchi salat keldi...</h2>');
// res.write('<h2>2. Keyin sho\'rva keldi...</h2>');
// res.write('<h2>3. Asosiy ovqat keldi...</h2>');

// // Oxirida albatta res.end() bilan buyurtma tugadi deb aytish shart!
// res.end('<p>Yoqimli ishstaha!</p>');

// ////////////////////////////////////

// })  
// server.listen(3000,()=>{
// console.log("sever 3000-port da ishlayapti")
// })

// import http from 'http'
// const server1=http.createServer((req,res)=>{
//   if(req.url==='/' && req.method==='GET'){
//     res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
//     res.end(`
//       <h2>Ismingizni kiriting:</h2>
//       <form action="/keyingisahifa" method="POST">
//         <input type="text" name="ism" placeholder="Ismingiz..." />
//         <button type="submit">Yuborish</button>
//       </form>
//     `);
//   }
//   else if(req.url==='/keyingisahifa' && req.method==='POST'){
//     let tana="";
//     req.on("data",(bulakgabulingan)=>{
//       tana+=bulakgabulingan.toString();
//     })
//     req.on("end",()=>{
//       res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
//       res.end(`<h1>Muvaffaqiyali saqlandi Yuborilgan ${tana}</h1>`)
//       console.log(`siz yuborgan ism:${tana}`)
//     })
//   }else{
//     res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'})
//     res.end( `<h1>Sahifa topilmadi</h1>`)
//   }
// })

// server1.listen(8000,()=>{
//   console.log("server 8000-portda ishlayapti")
// })


// import https from 'https'

// https.get("https://jsonplaceholder.typicode.com/users/1",(res)=>{
//   let data=""
//   res.on('data',(chunk)=>{
//     data+=chunk
//   })
//   res.on("end",()=>{
//     console.log(data)
//   })
//   res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
//   res.end(`<h1>${data}</h1>`)
// }).on("error",(err)=>{
// console.log("Xatolik: "+err)
// })

// import https from 'https'
// async function Jsonmalol() {
//   try{
//     let malumot=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   let data= await malumot.json()
//   console.log(data)
//   }catch(err){
//     console.log(err)
//   }
// }

// Jsonmalol()


// import https from 'https'
// import fs from 'fs'

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// }

// const server = https.createServer(options,(req,res)=>{
//   res.writeHead(200,{'Content-Type': ';text/html; charset=utf-8'})
//   res.end(`<h1>Salom, Dunyo!</h1>`)
// })

// server.listen(3000,()=>{
//   console.log("Server 3000-port da ishlayapti")
// })


// import https from 'https'

// const server=https.get('https://httpbin.org/delay/5',{timeout:5000},(res)=>{
//   let data=''
//   res.on('data',(chunk)=>{
//     data += chunk;
//   })
//   res.on('end',(chunk)=>{
//     console.log("Mana kelgan javob:");
//     console.log(data);
//   })
// })

// server.on('timeout',()=>{
//   console.log("Vaqt tugadi! Server javob bermadi")
//   server.destroy()
// })
// server.on('error',()=>{
//   console.log('So\'rov bekor qilindi')
// })


///////////////////////////////////////////////////

// import fs from 'fs'
// fs.writeFile("Users.txt","Salom mening ismim Sherbek",(err)=>{
//   if(err){
//     console.log("Xatolik:" ,err)
//   }
//   console.log("Fayl yaratildi File created successfully")
// })

// import fs from 'fs';

// fs.appendFile("Users.txt","\nSherbek 21 yoshda",(err)=>{
//   if(err){
//     console.log("Xatolik:",err)
//     return
//   }
//   console.log("text successfully added - malumot qo'shildi")
// })

// import fs from 'fs'

// fs.readFile("Users.txt","utf8",(err,data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data)
// })


// import fs from 'fs';

// fs.unlink("Users.txt",(err)=>{
//   if(err){
//     console.log("Xatolik: ",err)
//     return
//   }
//   console.log("Fayl o\'chirildi")
// })

// import fs from 'fs';

// fs.appendFile("Users.js","async function sayHello() {console.log('men appenFile orqali qo'shilgan funksiyaman')}",(err)=>{
//   if(err){
//     console.log("Xatolik: ",err)
//     return
//   }
//   console.log("faylga malumot qo\'shildi")
// })

// import fs from 'fs';
// fs.rename("Users.js","Users/papkaichigaozgartiribquyilganfayl.txt",(err)=>{
//   if (err) {
//     console.log("Xatolik: ",err)
//     return
//   }
//   console.log("Fayl joylashuvi o'\zgartirildi")
// })
///////////////////////////////////////////////

// import fs from 'fs';
// fs.access("Users/papkaichigaozgartiribquyilganfayl.txt",(err)=>{
//   // Users/ ni qoymasa ham buladi men sinash uchun quydim asosiy faylda yoqligi uchun mavjud emas deb chiqaradi eslatma
//   if(err){
//     console.log("Fayl mavjud emas")
//   }else{
//     console.log("Fayl mavjud")
//   }
// })
//////////////////////////////////////////

// import fs from 'fs';
// fs.mkdir("Public/images/photos",{recursive:true},(err)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log("Fayl yaratildi")
// })

///////////////////////////////////////

// import fs from 'fs';
// fs.readdir("Public",(err,files)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(files)
// })

//////////////////////////////////////////

// import fs from 'fs';
// fs.rmdir("Public",{ recursive: true, force: true }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Papka o‘chirildi");
// });

////////////////////////////////////////

// import fs from "fs";
// fs.rm("images", {
//   recursive: true,
//   force: true
// }, (err) => {
//   if (err) console.log(err);
// });

////////////////////////////////////////

import fs from 'fs'
fs.stat("Users.txt",(err,stats)=>{
  if(err){
    console.log(err)
    return
  }
  console.log("Hajmi:",stats.size)
  console.log("Faylmi:",stats.isFile())
  console.log("Papkami:", stats.isDirectory());
  console.log("Yaratilgan:", stats.birthtime);
  console.log("O‘zgartirilgan:", stats.mtime);
})