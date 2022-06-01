const express = require("express");

const { ItemController } = require("./controllers");
const { KeywordController } = require("./controllers");

const router = express.Router();

router.get("/keyword", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/keyword", KeywordController.browse);
router.get("/keyword/:id", KeywordController.read);
router.put("/keyword/:id", KeywordController.edit);
router.post("/keyword", KeywordController.add);
router.delete("/keyword/:id", KeywordController.delete);

module.exports = router;
