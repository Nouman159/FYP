const router = require("express").Router();
const controller = require("../Controllers/userController");

router.post("/register", controller.Register);
router.post("/login", controller.Login);

module.exports = router;
