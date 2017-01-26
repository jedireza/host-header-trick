const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/home/jedireza/.spacekit/certs/live/laptop.reza.spacekit.io/privkey.pem'),
  cert: fs.readFileSync('/home/jedireza/.spacekit/certs/live/laptop.reza.spacekit.io/fullchain.pem')
};

https.createServer(options, (req, res) => {
  console.log('handler');
  res.writeHead(200);
  res.end('hello world\n');
}).listen(443);
