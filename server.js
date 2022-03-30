const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}.${PORT}`);
});
