---
layout: page
permalink: /api-docs/
---


## net.TCPSocket

Provides raw TCP protocol connection socket.


<span style="color:#223A23">constructor()</span>
===

Create new socket object in the closed state.

```js
const socket = new runtime.net.TCPSocket();
```

<span style="color:#223A23">open(string ip, number port)</span>
===

Open socket and connect to TCP server using `ip` address and `port`.

Argument | Type | Description
--- | --- | ---
ip | string | Server IP address to connect to.
port | number | TCP server port.
--

```js
socket.open('127.0.0.1', 8080);
```

<span style="color:#223A23">send(Uint8Array buffer)</span>
===

Push data buffer into socket transmit queue. This does not copy data, buffer will be sent directly to network interface, data modifications made after `send()` call may affect transmitted data.

Argument | Type | Description
--- | --- | ---
buffer | Uint8Array | Buffer to send.
return | bool | Hint to the caller that transmit queue is full.
--

```js
socket.send(new Uint8Array([1, 2, 3]));
```

<span style="color:#223A23">halfclose()</span>
===

Send stream ended notification, but keep receiving new data.

```js
socket.halfclose();
```

<span style="color:#223A23">close()</span>
===

Close the socket, stop transmitting and receiving new data.

```js
socket.close();
```

<span style="color:#223A23">ondata</span>
===

Handler for received data events.

```js
socket.ondata = function(buffer) {
  console.log(buffer);
};
```

Example
==========

```js
var socket = new runtime.net.TCPSocket();

socket.onopen = function() {
  socket.send(new Uint8Array([1, 2, 3]));
};

socket.ondata = function(buf) {
};

socket.onend = function() {
};

socket.open('127.0.0.1', 8080);
```


