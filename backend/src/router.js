const express = require("express");

const { ItemController, KeywordController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/keywords", KeywordController.browse);
router.get("/keywords/:id", KeywordController.read);
router.put("/keywords/:id", KeywordController.edit);
router.post("/keywords", KeywordController.add);
router.delete("/keywords/:id", KeywordController.delete);

module.exports = router;
