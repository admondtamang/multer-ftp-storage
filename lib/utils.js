const path = require("path");
const default_filename = (_req, file) => {
  // const fileExt = path.extname(file.originalname);

  return `${Date.now()}_${file.originalname}`;
};

const ftp_config = {
  host: "localhost",
  user: "filezilla",
  password: "8624",
  secure: false,
};

module.exports = { default_filename, ftp_config };
