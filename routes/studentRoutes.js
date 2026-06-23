const express = require('express');
const router = express.Router();
const controller = require('../controller/studentController');
router.post("/",controller.addEnteries);
router.get("/",controller.getEnteries);

router.get("/:id",controller.getEnteriesID);

router.put("/:id",controller.updateEnteries);
router.delete("/:id",controller.deleteEnteries);

module.exports = router;