const express = require("express");
const router = express.Router();
// const { login } = require("../controllers/userController/userLogin");
const {
  createUser,
  login,
  getUser,
  userUpdate,
} = require("../controllers/userController");

const {
  createProduct,
  getProduct,
  getProductByParam,
  updateProductByParam,
  deleteProduct,
} = require("../controllers/productController");

const { createCart } = require("../controllers/cartController");

const { authentication, authorization } = require("../middleware/auth");

router.post("/register", createUser);
router.post("/login", login);
router.get("/user/:userId/profile", authentication, getUser);
router.put("/user/:userId/profile", authentication, authorization, userUpdate);

router.post("/products", createProduct);
router.get("/products", getProduct);
router.get("/products/:productId", getProductByParam);
router.put("/products/:productId", updateProductByParam);
router.delete("/products/:productId", deleteProduct);

router.post("/users/:userId/cart", authentication, createCart);

module.exports = router;
