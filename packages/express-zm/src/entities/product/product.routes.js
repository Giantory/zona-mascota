const { Router } = require("express");
const multer = require("multer");

//controllers
const { postProduct } = require("./controllers");

const router = Router();
const storage = multer.diskStorage({
  destination: "./public/uploads/images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.post(
  `/api/products/registerProduct`,
  upload.single("image"),
  postProduct
);

module.exports = router;
