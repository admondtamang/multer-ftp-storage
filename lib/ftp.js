const ftp = require("basic-ftp");

/**
 * file upload
 * @param {*} config
 * @param {*} stream
 * @param {*} filename
 */
async function fileUpload(config, stream, filename) {
  const client = new ftp.Client();
  // client.ftp.verbose = true;
  try {
    await client.access(config);
    await client.uploadFrom(stream, filename);
  } catch (err) {
    console.log(err);
  }
  // calculateSize
  const size = await client.size(filename);

  client.close();

  return { size: size || 0 };
}

/**
 * remove
 * @param {*} config
 * @param {*} stream
 * @param {*} filename
 */
async function removeFile(filename, config) {
  const client = new ftp.Client();
  // client.ftp.verbose = true;
  try {
    await client.access(config);
    await client.remove(filename);
  } catch (err) {
    console.log(err);
  }
  client.close();
}

module.exports = { fileUpload, removeFile };
