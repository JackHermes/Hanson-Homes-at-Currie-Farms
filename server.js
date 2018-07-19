const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey there');
})
// app.use(express.static('.'));

app.listen(5000);