const express = require("express");
const passport = require("passport");
const GenerateToken = require("./services/GenerateToken");
const { hashPassword } = require("./services/PasswordHashing");
const { validateUser } = require("./validators/UserValidator");
const { validateKeyword } = require("./validators/KeywordValidator");
const { validateProduct } = require("./validators/ProductValidator");
const {
  validateKeywordProduct,
} = require("./validators/KeywordProductValidator");
const { validateProductShop } = require("./validators/ProductShopValidator");

const {
  ItemController,
  KeywordController,
  ProductController,
  UserController,
  KeywordProductController,
  ProductShopController,
  ShopController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/shops", ShopController.browse);
router.get("/shops/:id", ShopController.read);
router.put("/shops/:id", ShopController.edit);
router.post("/shops", ShopController.add);
router.delete("/shops/:id", ShopController.delete);

router.get("/keywords", KeywordController.browse);
router.get("/keywords/:id", KeywordController.read);
router.put("/keywords/:id", validateKeyword, KeywordController.edit);
router.post("/keywords", validateKeyword, KeywordController.add);
router.delete("/keywords/:id", KeywordController.delete);

router.get("/products", ProductController.browse);
router.get("/products/:id", ProductController.read);
router.put("/products/:id", validateProduct, ProductController.edit);
router.post("/products", validateProduct, ProductController.add);
router.delete("/products/:id", ProductController.delete);

router.get("/keyword_product", KeywordProductController.browse);
router.post(
  "/keyword_product",
  validateKeywordProduct,
  KeywordProductController.add
);
router.delete(
  "/keyword_product/products/:product_id/keywords/:keyword_id",
  KeywordProductController.delete
);

router.get("/product_shop", ProductShopController.browse);
router.post("/product_shop", validateProductShop, ProductShopController.add);
router.delete(
  "/product_shop/shops/:shop_id/products/:product_id",
  ProductShopController.delete
);

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.edit);
router.post("/users", validateUser, hashPassword, UserController.add);
router.delete("/users/:id", UserController.delete);

router.post("/login", passport.authenticate("local"), GenerateToken);

module.exports = router;
