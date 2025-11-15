const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const check = require('express-validator').check
const bodyParserMW = bodyParser.urlencoded({
  extended : true,
});

const multer = require('multer')
const adminController = require('../controllers/admin.controller')
const adminGuard = require('./guards/admin.guard')
    


       router.get('/add',adminGuard,adminController.getAdd)
       router.post('/add' ,adminGuard,multer({
        storage : multer.diskStorage({
               destination : (req , file ,cb)=>{
                cb(null,'images')
               },
               filename : (req , file, cb)=>{
                cb(null,Date.now() + '-' + file.originalname)
               }
        }), 

       }).single('productImage'),
         check('productImage').custom((value , {req})=>{
                 if(req.file) return true 
                 else throw 'Image is required'      


         }),
       adminController.postAdd )
       router.get('/orders',adminGuard,adminController.getOrders)
       router.post('/orders',adminGuard,bodyParserMW,adminController.postStatus)
       router.get('/all',adminGuard,adminController.getOrders)
       router.get('/pending',adminGuard,adminController.getPendingOrders)
       router.get('/sent',adminGuard,adminController.getSentOrders)
       router.get('/Completed',adminGuard,adminController.getCompletedOrders)
       router.all('/email',adminGuard,bodyParserMW,adminController.getOrdersByUser)



 

  module.exports = router;