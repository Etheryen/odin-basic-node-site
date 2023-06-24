const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const html = fs.readFileSync('pages/index.html');
      res.end(html);
      return;
    }

    if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const html = fs.readFileSync('pages/about.html');
      res.end(html);
      return;
    }

    if (req.url === '/contact-me') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const html = fs.readFileSync('pages/contact-me.html');
      res.end(html);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/html' });
    const html = fs.readFileSync('pages/404.html');
    res.end(html);
  })
  .listen(8080);
