---
layout: page
title: Getting Started
permalink: /getting-started/
---

## <a name="quick-start"></a>Quick Start

The easiest way to start playing with runtime.js is to clone [Hello World](https://github.com/runtimejs/helloworld) repository and run it in QEMU.
First, make sure you have [Node.js](https://nodejs.org/download/) and [QEMU](http://wiki.qemu.org/Main_Page) installed.

#### Install Node.js

Install Node.js if you don't have it already installed.
[https://nodejs.org/download/](https://nodejs.org/download/).
[npm](https://www.npmjs.com/) package manager will also be installed.

#### Install QEMU

**Install using [Homebrew](http://brew.sh/) on OSX:**

```bash
brew install qemu
```

**Install on Ubuntu:**

```bash
sudo apt-get install qemu
```

**Install on Windows:**

QEMU binaries [http://qemu.weilnetz.de/](http://qemu.weilnetz.de/)

```
set PATH=%PATH%;C:\Program Files\qemu
```

See also:

[http://wiki.qemu.org/Download](http://wiki.qemu.org/Download)<br>
<span style="word-wrap:break-word;">[http://en.wikibooks.org/wiki/QEMU/Installing_QEMU](http://en.wikibooks.org/wiki/QEMU/Installing_QEMU)</span>

#### Install runtime.js command line tools

```
npm install runtime-cli -g
```

This adds global `runtime` command for easy access.

#### Hello World repository

Clone and install dependencies:

```bash
git clone https://github.com/runtimejs/helloworld.git
cd helloworld
npm install
```

Run:

```
npm start
```

Done, project should load and print "Hello World!".

## <a name="new-application"></a>New application

It's easy to create a new project and manage dependencies using npm package manager:

```bash
npm init
npm install runtimejs --save
```

index.js

```js
console.log('It works!');
```

Run in QEMU:

```bash
runtime start
```

#### Next Steps

Check out [GitHub](https://github.com/runtimejs/runtime) repository. The project is in development and a lot of important features are missing. Contributions are welcome.
