const path = require('path');
const default_filename = (_req, file) => {
  const fileExt = path.extname(file.originalname);

  return `${file.fieldname}_${Date.now()}${fileExt}`;
};

const ftp_config = {
  host: 'localhost',
  user: 'yourName',
  password: 'yourPass',
  secure: false,
};

module.exports = { default_filename, ftp_config };
