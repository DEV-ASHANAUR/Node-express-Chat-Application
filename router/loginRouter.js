// external imports
const express = require('express');

// internal route
const {getLogin} = require('../controller/loginController');
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

//login page
router.get("/",decorateHtmlResponse("Login"), getLogin);

module.exports = router;