const express = require('express');
const multer = require('multer');
const FTPStorage = require('./storage');

const uploader = multer({
  storage: FTPStorage({
    basepath: '/',
    ftp_config: {
      host: 'localhost',
      user: 'yourName',
      password: 'yourPass',
      secure: false,
    },
  }),
});

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/', uploader.any(), (req, res) => {
  res.send('heddllo');
});

app.listen(9999, () => {
  console.log('server listening at port 9999');
});
