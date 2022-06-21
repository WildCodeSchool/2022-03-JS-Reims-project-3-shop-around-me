const express = require("express");
const { hashPassword } = require("./services/PasswordHashing");
const { validateUser } = require("./validators/UserValidator");
const { validateKeyword } = require("./validators/KeywordValidator");
const { validateProduct } = require("./validators/ProductValidator");
const {
  validatePkAffiliation,
} = require("./validators/PkAffiliationValidator");
const {
  validateSpAffiliation,
} = require("./validators/SpAffiliationValidator");

const {
  ItemController,
  KeywordController,
  ProductController,
  UserController,
  PkAffiliationController,
  SpAffiliationController,
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

router.get("/pk_affiliations", PkAffiliationController.browse);
router.post(
  "/pk_affiliations",
  validatePkAffiliation,
  PkAffiliationController.add
);
router.delete(
  "/pk_affiliations/products/:product_id/keywords/:keyword_id",
  PkAffiliationController.delete
);

router.get("/sp_affiliations", SpAffiliationController.browse);
router.post(
  "/sp_affiliations",
  validateSpAffiliation,
  SpAffiliationController.add
);
router.delete(
  "/sp_affiliations/shops/:shop_id/products/:product_id",
  SpAffiliationController.delete
);

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.edit);
router.post("/users", validateUser, hashPassword, UserController.add);
router.delete("/users/:id", UserController.delete);

module.exports = router;
