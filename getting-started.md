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
[npm](https://www.npmjs.com/) package manager will be also installed.

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

## <a name="developer-tools"></a>Developer tools

Tools could be included into application as dev-dependencies (as in Hello World example) or installed globally.

#### runtimeify

[runtimeify](https://www.npmjs.com/package/runtimeify) creates code bundles and packages them into initrd (initial ramdisk) images. It's a wrapper around [Browserify](http://browserify.org/).

```bash
npm install runtimeify -g
```

#### runtime-tools

Adds `runtime-qemu` command to be able to easily run bundled up image in QEMU.

```bash
npm install runtime-tools -g
```

## <a name="creating-an-application"></a>Creating an application

The process is very similar to any other Node.js application managed by npm.

```bash
npm init
npm install runtimejs --save
npm install runtimeify --save-dev
npm install runtime-tools --save-dev
```

index.js

```js
var runtime = require('runtimejs');
console.log('It works!');
```

Create bundle:

```bash
runtimeify index.js -o initrd
```

Run in QEMU locally:

```bash
runtime-qemu ./initrd
```

#### Next Steps

Check out [GitHub](https://github.com/runtimejs/runtime) repository. The project is in development and a lot of important features are missing. Contributions are welcome.
