const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';
const app = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
        res.write('Hello Holberton School!');
    }
    if (req.url === '/students') {
        res.write('This is the list of our students\n');
        try {
            const data = await countStudents(process.argv[2]);
            console.log("data---", data);
            return res.end(data);
        } catch (error) {
            console.log("error---", error);
            res.end(error.message);
        }
    }
    res.end();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;