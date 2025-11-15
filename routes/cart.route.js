const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller')
const authGuard = require('./guards/auth.guard')
const bodyParser = require('body-parser');
const bodyParserMW = bodyParser.urlencoded({
    extended : true,
  });
  const check = require('express-validator').check




  router.get('/' ,authGuard.isAuth,bodyParserMW,cartController.getCart )
  
    router.post('/' ,authGuard.isAuth,bodyParserMW ,
          check('amount').not().isEmpty().withMessage('amount is required').isInt({
            min : 1
          }).withMessage('amount must be greater then 0'),cartController.postCart
             )    

        router.post('/save',authGuard.isAuth ,bodyParserMW ,
        check('amount').not().isEmpty().withMessage('amount is required').isInt({
          min : 1
        }).withMessage('amount must be greater then 0') ,cartController.postSave )


        router.post('/delete',authGuard.isAuth,bodyParserMW,cartController.postDelete )
        router.post('/deleteAll',authGuard.isAuth,cartController.postDeleteAll )
        module.exports = router;