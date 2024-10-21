const http = require('http')
const fs = require('fs');
const { stdout } = require('process');
const { builtinModules } = require('module');
const path = require('path');


const monitor = http.createServer((req, res) => {
    if(req.url.includes('.png')) {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        fs.createReadStream(__dirname + req.url).pipe(res);
    } else if (req.url.includes('.jpeg')) {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        fs.createReadStream(__dirname + req.url).pipe(res);
    } else if( req.url.includes('/video')) {
        res.writeHead(200, { 'Content-Type': 'video/mp4'})
        fs.createReadStream(__dirname + req.url).pipe(res);
    } else if( req.url.includes('.js')) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' })
        fs.createReadStream(__dirname + req.url).pipe(res);
    } else if (req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url.includes("home")) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/home.html').pipe(res);
    } else if (req.url.includes('.css')) {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        fs.createReadStream(__dirname + req.url).pipe(res);
    } else if (req.url.includes('.woff')) {
        res.writeHead(200, { 'Content-Type': 'font/woff' })
        fs.createReadStream(__dirname + req.url).pipe(res);
    } else if (req.url.includes('.woff2')) {
        res.writeHead(200, { 'Content-Type': 'font/woff2' })
        fs.createReadStream(__dirname + req.url).pipe(res);
    } 
})

monitor.listen(8080, '127.0.0.1', 10, () => {
    console.log('Application initialized')
})