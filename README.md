## Installation

```sh
$ npm install multer-ftp-storage
```

## Usage

Multer adds a `body` object and a `file` or `files` object to the `request` object. The `body` object contains the values of the text fields of the form, the `file` or `files` object contains the files uploaded via the form.

Basic usage example:

Don't forget the `enctype="multipart/form-data"` in your form.

```

var FTPStorage = require('multer-ftp-storage');

const ftpStorageEngine = new FTPStorage({
  ftp_config: {
    host: FTP.HOST,
    secure: false, // enables FTPS/FTP with TLS
    user: FTP.USERNAME,
    password: FTP.PASSWORD,
  },
});

const ftpUploader = multer({
  storage: ftpStorageEngine,
});

function fileUpload(req, res, next) {
  ftpUploader.any()(req, res, next);
}

module.exports = fileUpload;
```

```
router.post(
  '/createPostRequest',
    fileUpload,
    (req, res, next) => {
        res.send();
    }
);

```

## License

[MIT](LICENSE)
