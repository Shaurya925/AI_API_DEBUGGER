const express = require('express');
const { debugAPI, getSingleDebug } = require('../controllers/debugController');
const router = express.Router();

router.post("/debug",debugAPI)
router.get("/debug/:id",getSingleDebug)




module.exports = router