//const http = require('http');
const express=require('express');
const https=require('https');
const path=require('path');
const fs=require('fs');

const app=express();
//app.use(helmet());

app.use(express.urlencoded({
    extended: true
}))

app.get("/",(req,res)=>{
    res.send("Welcome!")
})

// const hostname = '127.0.0.1';
const port = 3000;


// handler=(req,res) => { //function handler(req, res) {
//     if (req.url === "/api" && req.method === "GET") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Welcome to world of Asyn Programming\n');
//     }
//     else{
//         res.end('Invalid Request\n');
//     }
// }
// const server = http.createServer(handler);

const sslServer = https.createServer({
    key:fs.readFileSync(path.join(__dirname,'crt','key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'crt','crt.pem')),
},
app
)

// const server = https.createServer((req, res) => {
//     if (req.url === "/api" && req.method === "GET") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Hello, World! 741\n');
//     }
// });

sslServer.listen(port,()=>console.log('Secure server on Port 3000'))

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });