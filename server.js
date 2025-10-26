const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 8080;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = `.${parsedUrl.pathname}`;
    
    // Redirect root to index.html
    if (pathname === './') {
        pathname = './public/index.html';
    }
    // Handle public files
    else if (pathname.startsWith('./public/')) {
        // Keep as is
    }
    // Handle assets, js, data from root
    else if (pathname.startsWith('./assets/') || 
             pathname.startsWith('./js/') || 
             pathname.startsWith('./data/')) {
        // Keep as is - these are served from project root
    }
    // Handle files in public directory
    else {
        pathname = `./public${parsedUrl.pathname}`;
    }

    const ext = path.parse(pathname).ext;
    const mimeType = mimeTypes[ext] || 'text/plain';

    fs.readFile(pathname, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);
            return;
        }
        res.setHeader('Content-type', mimeType);
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});