const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'dbname'
});

connection.connect();

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const filePath = path.join(__dirname, reqUrl.pathname);

  // raada failus

      let Path = '.' + req.url;
    if (Path === './') {
        Path = './html.html';
    }
  if (req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('File Not Found');
        return;
      }

      let contentType = 'text/html';
      if (filePath.endsWith('.css')) {
        contentType = 'text/css';
      } else if (filePath.endsWith('.js')) {
        contentType = 'text/javascript';
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    });
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
  }
});