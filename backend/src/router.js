const express = require("express");

const { ItemController } = require("./controllers");

const router = express.Router();

router.get("/keyword", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/keyword", ItemController.browse);
router.get("/keyword/:id", ItemController.read);
router.put("/keyword/:id", ItemController.edit);
router.post("/keyword", ItemController.add);
router.delete("/keyword/:id", ItemController.delete);

module.exports = router;
