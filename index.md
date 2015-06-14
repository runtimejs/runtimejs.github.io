---
layout: index
---

## What is runtime.js?

**runtime.js** is an open-source library operating system for the cloud that runs JavaScript, could be bundled up with an application and deployed as a lightweight and immutable VM image.

It's built on [V8 JavaScript engine](https://code.google.com/p/v8/) and uses event-driven and non-blocking I/O model inspired by Node.js. At the moment [KVM](http://www.linux-kvm.org/page/Main_Page) is the only supported hypervisor.

Example **index.js**:

```js
var runtime = require('runtimejs')
console.log('Hello world!')
```

Let's bundle up and run it!

```bash
# install dependencies
npm install runtimejs
npm install runtimeify -g
npm install runtime-tools -g

# bundle up ramdisk image
runtimeify index.js -o initrd

# make sure you have QEMU installed
brew install qemu           # OSX
sudo apt-get install qemu   # Ubuntu

# run it in QEMU
runtime-qemu ./initrd
```

WARNING: project is in development and not ready for production use.

## How does it work?

There are two main components: operating system (OS) kernel and a <a href="https://www.npmjs.com/package/runtimejs"><nobr>core JavaScript library</nobr></a>.

The kernel is the C++ program that manages low-level resources like CPU and memory, runs applications using embedded <a href="https://code.google.com/p/v8/"><nobr>V8 JavaScript engine</nobr></a>, and exposes raw hardware to JavaScript.

Application, its dependencies and the core library are bundled up using <a href="http://browserify.org/">Browserify</a>, then packed into ramdisk image for kernel to use.

runtime.js is a library operating system, because application uses it as its own dependency (library). Internal architecture is similar to [exokernels](https://en.wikipedia.org/wiki/Exokernel), where system exposes the hardware to application code and forces as few abstractions as possible.

<a href="{{ '/getting-started/' | prepend: site.baseurl }}">Get Started &#8811;</a>
