const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT;
app.listen(port, () => {
  console.log('App is listening on', port);
});
