const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const adminController = require("../controller/adminController");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/imgs"));
  },
  filename: function (req, file, cb) {
    cb(null, "membership-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/admin", adminController.index);
router.get("/admin/create", adminController.create);
router.post(
  "/admin/create",
  upload.single("imgMembership"),
  adminController.save
);
// router.get('/administrar/detail/:id', controllersAdmin.show);
// router.get('/administrar/edit/:id', controllersAdmin.edit);

module.exports = router;
