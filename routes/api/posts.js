const express = require("express");
const router = express.Router();

// api/posts

router.get("/", (req, res) => res.send("test de la route posts"));

module.exports = router;
