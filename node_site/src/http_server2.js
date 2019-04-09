
const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
    if (request.url !== '/') return;
    fs.writeFile(__dirname + '/header01.json'), JSON.stringify(request, response), error => {
        if (error) return console.log(error); console.log('HTTP檔頭儲存')
    }
    fs.readFile(__dirname + '/header01.json'), (error, data) => {
        if (errror) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('500 - 伺服器錯誤 ')
        } else {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end(data)
        }
        };
    }).listen(3000)