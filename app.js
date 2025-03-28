// app.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 微信验证接口（示例）
app.get('/wx', (req, res) => {
  const { signature, timestamp, nonce, echostr } = req.query;
  if (echostr) {
    console.log('[微信验证] 收到验证请求');
    res.send(echostr);
  } else {
    res.status(400).send('Invalid request');
  }
});

// 启动服务
app.listen(port, () => {
  console.log(`服务已启动在端口 ${port}`);
});