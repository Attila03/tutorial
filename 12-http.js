const http = require('http');

const serverCb = (req, res) => {

    if (req.url === '/') {
        res.end("Welcome to our home page");
        return;
    }

    if (req.url === '/about') {
        res.end("History of the org");
        return;
    }

    res.end(`<h1>Cant find page</h1>`)
    return;
}


const server = http.createServer(serverCb);

server.listen(5000);