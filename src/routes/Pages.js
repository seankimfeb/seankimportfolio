import Skills from "../pages/Skills";

const express = require("express");

const router = express.Router();

module.exports = router;
router.get("/Skills", (req, res) => res.render(<Skills />));
