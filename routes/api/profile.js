const express = require("express");
const router = express.Router();

// api/profile

router.get("/", (req, res) => res.send("test de la route profile"));

module.exports = router;
