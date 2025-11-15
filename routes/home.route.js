const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller')
const authGuard = require('./guards/auth.guard')
  router.get('/',homeController.getHome)

  module.exports = router;