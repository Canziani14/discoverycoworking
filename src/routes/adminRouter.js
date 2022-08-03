const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

//MIDDLEWARES
const upload = require("../middlewares/multer/multerMemberships");
const createMembershipValidations = require("../middlewares/validationsForms/createMembershipValidations");
const authMiddleware = require("../middlewares/access/AuthorizedMd");
const adminAcces = require("../middlewares/access/adminMd");

router.get("/admin", adminController.index);
router.get("/admin/create", authMiddleware, adminAcces, adminController.create);
router.post(
  "/admin/create",
  upload.single("imgMembership"),
  createMembershipValidations,
  adminController.createProcess
);
router.get("/admin/detail/:nameMembership", adminController.show);
router.get("/admin/edit/:nameMembership", adminController.edit);
router.put(
  "/admin/edit/:nameMembership",
  upload.single("imgMembership"),
  adminController.update
);

module.exports = router;
