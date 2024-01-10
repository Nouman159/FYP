const router = require("express").Router();
const controller = require("../Controllers/productController");
const middleware = require("../middleware");
const multer = require("multer");

// Images Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Photos/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });


router.get(
    "/get-all-products",
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllProducts
);
router.get(
    "/get-all-approved-products",
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllApprovedProducts
);
router.get(
    "/get-user-products",
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetUserProducts
);
router.post(
    "/register-product",
    middleware.stripToken,
    middleware.verifyToken,
    upload.single('productImage'),
    controller.RegisterProduct
);

module.exports = router;
