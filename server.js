const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.use(express.static(path.resolve(__dirname, )))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/dist'))
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}.${PORT}`);
}
