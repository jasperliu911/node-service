const express = require('express');
const app = express();
const PORT = 80; // 默认端口，可改为 80 或其他

// 中间件：解析 JSON 请求体
app.use(express.json());

// 测试路由：GET /
app.get('/', (req, res) => {
  res.send('Node.js 后台服务已正常运行！');
});

// 测试路由：POST /api/echo
app.post('/api/echo', (req, res) => {
  // 返回客户端发送的 JSON 数据
  res.json({
    message: '收到你的请求数据啦！',
    yourData: req.body
  });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('服务器出错啦！');
});

// 启动服务
app.listen(PORT, () => {
  console.log(`服务已启动，访问地址：http://localhost:${PORT}`);
});