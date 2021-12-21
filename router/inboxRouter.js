// external imports
const express = require('express');

//internal imports
const {getIndox} = require('../controller/inboxController');
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

//inbox page
router.get('/',decorateHtmlResponse("Inbox"),getIndox);

//exports
module.exports = router;
