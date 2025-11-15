const productsModel = require('../models/products.model');
exports.getProduct = (req,res,next)=>{
        let id =req.params.id
    productsModel.getProductById(id).then((product)=>{
             res.render('product' , {
                product : product ,
                isUser : req.session.userId,
                isAdmin : req.session.isAdmin,
                validationError : req.flash('validationErrors')[0],
             })
           
    })



}
exports.getProductById = (req,res,next)=>{
    let id =req.params.id
productsModel.getProductById(id).then((product)=>{
         res.render('product' , {
            product : product ,
            isUser  :req.session.userId,
            isAdmin : req.session.isAdmin,
            validationError : req.flash('validationErrors')[0],
         })
       
})



}
exports.getProduct = (req,res,next)=>{
        res.redirect('/')



}