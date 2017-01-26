# Host header trick

The goal was to have secure LAN communication using publicly verifiable TLS.
This demo code shows us creating an HTTPS server with node and making requests
to our local IP but passing the `Host` header with the request, essentially
by-passing DNS resolution.

# Setup

Get your cert files and edit the `server.js` file with thier paths.

Update `client.js` with the correct host name that corresponds to your cert.

# Run the server

```bash
$ [sudo] node server.js
```

# Run the client

```bash
$ node client.js
```

# Curl request

While your server is running you can make requests with curl like this:

```bash
$ curl https://laptop.reza.spacekit.io --resolve 'laptop.reza.spacekit.io:443:127.0.0.1'
```
