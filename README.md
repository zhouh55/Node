# Node - study
## 核心模块 fs
- 基本采用异步的形式进行 写入 读取 操作，防止 I/O 堵塞。
- 读取的时候是 buffer 形式展示的
> createReadStream 和 readFile 都可以读取文件内容，他们的差别是什么？
>> 解：createReadStream 可以边读取文件内容边发送处理（处理完的内容会被GC），readFile是一次行读取完在存在内存中在进行处理（ 如果文件过大，那么会导致内存占用过高 ）

## 核心模块 http、https
- 可在服务端进行 XMLHttpRequest 请求，获取到的数据是以流（ 流的数据以 buffer形式显示 ）的形式传输，采用（ data 事件 ）接收，end 事件结束
- 补充：get 请求 body 中为什么不建议放参数？
       缓存机制是根据 url 来设置的，如果把参数放到 body 中，那么就失去了缓存效果
       还要可能就属于一种 默认的约束规范吧。