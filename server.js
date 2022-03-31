const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(PORT, HOST, () => {
  console.log(`Running on https://${HOST}:${PORT}`);
});
