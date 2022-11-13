const fs = require("fs");
const { fileUpload, removeFile } = require("./lib/ftp");
const { ftp_config, default_filename } = require("./lib/utils");

function FTPStorage(opts) {
  this.ftp_config = opts.ftp_config || ftp_config;
  this.filename = default_filename;
  this.local_path = opts.local_path; // localpath - need to end with /
}

FTPStorage.prototype._handleFile = async function _handleFile(req, file, cb) {
  const filename = this.filename(req, file);
  // upload to FTP
  await fileUpload(ftp_config, file.stream, filename);
  if (!this.local_path)
    cb(null, {
      path: filename,
    });

  // if you want to save locally
  if (this.local_path) {
    var outStream = fs.createWriteStream(filename);
    file.stream.pipe(outStream);
    outStream.on("error", cb);
    outStream.on("finish", async function () {
      cb(null, {
        path: this.local_path + filename,
        size: outStream.bytesWritten,
        filename: filename,
      });
    });
  }
};

FTPStorage.prototype._removeFile = async function _removeFile(req, file, cb) {
  if (this.local_path) fs(file.path, cb);

  await removeFile(file.path);
};

module.exports = function (opts) {
  return new FTPStorage(opts);
};
