
const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

//MIDDLEWARES
const upload = require("../middlewares/multer/multerMemberships");
const createMembershipValidations = require("../middlewares/validationsForms/createMembershipValidations");
const authMiddleware = require("../middlewares/access/AuthorizedMd");
const adminAcces = require("../middlewares/access/adminMd");

router.get("/admin",adminAcces, adminController.index);
router.get("/admin/create",adminAcces,  adminController.create);
router.post(
  "/admin/create",
  upload.single("imgMembership"),
  createMembershipValidations,
  adminController.createProcess
);
router.get("/admin/detail/:idMembership",adminAcces, adminController.show);
router.get("/admin/edit/:idMembership",adminAcces, adminController.edit);
router.put(
  "/admin/edit/:idMembership",
  upload.single("imagen"),
  adminController.update
);
router.get("/admin/delete/:idMembership",adminAcces, adminController.destroy);

router.get("/users", adminController.list)


module.exports = router;
