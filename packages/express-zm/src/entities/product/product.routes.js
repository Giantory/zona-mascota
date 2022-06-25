const { Router } = require("express");
const multer = require("multer");
const path = require('path')

//controllers
const { postProduct } = require("./controllers");

const router = Router();
const storage = multer.diskStorage({
  destination: "./public/uploads/images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.post(
  `/api/products/registerProduct`,
  upload.single("productImg"),
  postProduct
);

module.exports = router;
