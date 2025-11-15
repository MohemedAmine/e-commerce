const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller')
const authGuard = require('./guards/auth.guard')
const bodyParser = require('body-parser');
const bodyParserMW = bodyParser.urlencoded({extended : true,});
    router.post('/orders' ,bodyParserMW,orderController.postOrder )
    router.get('/verifyOrder' ,orderController.getVerifyOrder )
    router.get('/orders' , orderController.getOrders)
    router.post('/cancel',bodyParserMW,orderController.cancelOrder)
    router.post('/cancelAll' ,orderController.cancelAllOrder )
        module.exports = router;