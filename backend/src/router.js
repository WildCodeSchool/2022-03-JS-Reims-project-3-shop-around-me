const express = require("express");

const { ItemController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/products", ItemController.browse);
router.get("/products/:id", ItemController.read);
router.put("/products/:id", ItemController.edit);
router.post("/products", ItemController.add);
router.delete("/products/:id", ItemController.delete);

module.exports = router;
