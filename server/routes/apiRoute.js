const express = require('express');
const router = express.Router();
const apiController = require('../controller/api');

// @desc Post/Create new post
// @route POST /post

router.post('/post', apiController.newPost);

module.exports = router;