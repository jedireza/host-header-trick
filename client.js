const https = require('https');

var options = {
  localAddress: '127.0.0.1',
  headers: {
    host: 'laptop.reza.spacekit.io'
  },
  port: 443,
  path: '/',
  method: 'GET'
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
