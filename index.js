const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use('/static', express.static(__dirname + '/public'));

app.use('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
