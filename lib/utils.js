const path = require("path");

// file name uploading to FTP
const default_filename = (_req, file) => {
  // const fileExt = path.extname(file.originalname);

  return `${Date.now()}_${file.originalname}`;
};

// Default credientials
const ftp_config = {
  host: "localhost",
  user: "yourName",
  password: "yourPass",
  secure: false,
};

module.exports = { default_filename, ftp_config };
