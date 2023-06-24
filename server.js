const http = require('http');
const fs = require('fs');

const pages = {
  '/': 'index.html',
  '/about': 'about.html',
  '/contact-me': 'contact-me.html',
};

http
  .createServer((req, res) => {
    const page = pages[req.url] ?? '404.html';
    const status = page === '404.html' ? 404 : 200;
    const html = fs.readFileSync(`pages/${page}`);

    res.writeHead(status, { 'Content-Type': 'text/html' });
    res.end(html);
  })
  .listen(8080);
