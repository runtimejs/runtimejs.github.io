---
layout: index
---

## Overview

**runtime.js** is an open-source library operating system (unikernel) for the cloud that runs JavaScript, can be bundled up with an application and deployed as a lightweight and immutable VM image.

It's built on [V8 JavaScript engine](https://code.google.com/p/v8/) and uses event-driven and non-blocking I/O model inspired by Node.js. At the moment [KVM](http://www.linux-kvm.org/page/Main_Page) is the only supported hypervisor.

It tries to be compatible with npm module ecosystem and supports some of the Node.js API.

_WARNING: project is in development and not ready for production use._

## Usage

Install command line tool `runtime-cli`, it will add `runtime` command to the shell:

```
npm install runtime-cli -g
```

Make sure QEMU is installed, it enables running applications locally:

```
brew install qemu           # OSX
sudo apt-get install qemu   # Ubuntu
```

Setup simple project using npm:

```
mkdir project
cd project
npm init
npm install runtimejs --save
echo "console.log('ok')" > index.js
```

Run project locally in QEMU:

```
runtime start
```

That's it, QEMU should load and print `ok` to console.

## How does it work?

There are two main components: operating system kernel and a <a href="https://www.npmjs.com/package/runtimejs"><nobr>JavaScript library</nobr></a>.

The kernel is written in C++ and manages low-level resources like CPU and memory, runs JavaScript using embedded V8 engine. Library drives the entire system and manages hardware devices (usually virtualized by hypervisor).

<a href="{{ '/getting-started/' | prepend: site.baseurl }}">Get Started &#8811;</a>
