const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../../public/imgs/users"));
  },
  filename: function (req, file, cb) {
   // cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    cb(null, 'avatar' + '-' + Date.now()+ path.extname(file.originalname)); 
    
  },
});

const upload = multer({ storage });

module.exports = upload;
