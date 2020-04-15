# 什么是 Node.js

- 基于==v8 引擎的js运行时==
-  提供了操作服务器级别的 API
- 使用==事件驱动==和==非阻塞 I/O== 模型




## events 模块

> - events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装,EventEmitter 本质上是一个==观察者模式==的实现

1.  注册与 this

- 事件监听器函数调用时，`this` 指向 绑定的对象实例
- 绑定多个事件监听器(on 绑定)，触发事件时==按照注册顺序执行监听函数==

2. 异步模式

- 监听器函数切换到异步模式：`setImmediate()` 和 `process.nextTick()`

3. 其他 API

- 绑定只调用一次的事件监听器`once`
- 移除事件监听器`removeLisListener`
- 触发事件`emit`必须先绑定后触发


## 全局对象process进程

1. process 属性

- `process.argv` 进程命令行参数process.argv 是一个当前执行进程折参数组`[ node路径，当前执行的.js 路径，执行时设置的参数列表]`。
- `process.execArgv`  Node 的命令行参数数组
- `process.version` Node 编译时的版本号
- `process.pid` 当前进程的 PID


2. process 方法

- `process.cwd()` 返回进程当前的工作目录
- `process.exit([code])` 终止当前进程
- `process.nextTick()` nodejs 微任务

3. process 标准流操作

- `process.stderr` 标准错误流
- `process.stdin` 标准输入流
- `process.stdout` 标准输出流

## http 模块

> - http.createServer 方法创建一个 http 服务器，也可以使用其 http.request 方法创建一个 http 客户端。
> -  Node 对 HTTP 协议及相关 API 的封装比较底层，其仅能处理流和消息，对于消息的处理，也仅解析成报文头和报文体，但是不解析实际的报文头和报文体内容。

1. http.IncomingMessage 对象

- 作为第一参数,传给 `http.Server`服务器的 `request`事件和 `http.ClientRequest` 客户端的`response`事件。
- 用来访问应答的状态、头文件和数据等

2. http.Server 服务器对象

- 是一个事件发射器 `EventEmitter`
- `request`监听函数 `(http.IncomingMessage, http.ServerResponse) => {}`
- `listen()`接收客户端传入连接。

3. http.ServerResponse 对象

- 用于响应处理客户端请求
- 实现了 Writable Stream 接口，其对于客户端的响应，本质上是对这个可写流的操作。还是一个EventEmitter，包含：==close、finish 事件。==
- http.ServerResponse 实例是一个可写流，所以可以将一个文件流转接到 res 响应流中


## 压缩 zlib 模块

1. HTTP 流为提高网站响应速度，会在服务端进行压缩，客户端收到数据后再进行相应的解压。
2. 在 HTTP 传输中，gzip 是一种常用的压缩算法，使用 gzip 压缩的 HTTP 数据流，会在 HTTP 头中使用 Content-Encoding：gzip 进行标识。
3. `Accept-Encoding: gzip, deflate, br` 浏览器发给服务器,声明浏览器支持的解压类型
4. `Content-Encoding: gzip`服务器告诉浏览器 使用了哪种压缩类型


## 流 stream 模块

> - 流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。
> - 流可以是可读的、可写的、或者可读可写的。 所有的流都是 EventEmitter 的实例。

1. stream 类型

  - Writable - 可写入数据的流（例如 fs.createWriteStream()）。
  - Readable - 可读取数据的流（例如 fs.createReadStream()）。
  - Duplex - 可读又可写的流（例如 net.Socket）。
  - Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。

2. 用于消费流的API

  - 可读流可以通过 ` EventEmitter API ` 来通知程序(如 server 中 request 的 `data` 事件, process.stdin 的 `readable` 事件)
  - 可写流通过方法`write()` 和 `end()` 写入数据到流
  - 通过 `pipe()` 传输流的数据到另一个流