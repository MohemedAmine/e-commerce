const { Result } = require('express-validator')
const adminModel = require('../models/admin.model')
const orderModel = require('../models/order.model')
const validationResult = require('express-validator').validationResult
exports.getAdd = (req,res,next)=> {
    res.render("add-product",{
        isUser : true , 
        isAdmin : true ,
        validationError : req.flash('validationErrors')[0]
    })
} 
exports.postAdd =(req,res,next)=>{
    if(validationResult(req).isEmpty()){
        adminModel.addProductByAdmin({
            name : req.body.productName ,
            description : req.body.productDescription,
            price: req.body.productPrice, 
            category : req.body.productCategory,
            image : req.file.filename
        }).then(()=>{res.redirect('/')}).catch((err)=>{
               next(err)
        })
    }else {
        req.flash('validationErrors' , validationResult(req).array())
        res.redirect('/admin/add')

    }        
    
}
exports.getOrders = (req,res,next)=>{
    orderModel.getAllOrders().then((items)=>{
               res.render('manage-orders',{
                  items : items,
                  isUser : true , 
                  isAdmin : true

               })
    }).catch((err)=>console.log(err))          
    


}


exports.postStatus = (req,res,next) => {
   orderModel.updateStatus(req.body.id,{
    status :req.body.status,

   }).then((result)=>{
         res.redirect('/admin/orders')
         console.log(result)
   }).catch((err)=>{
    res.redirect('/admin/orders')
    console.log(err)
   })
         

}

exports.getPendingOrders = (req,res,next)=>{       
    orderModel.getOrdersByStatus('Pending').then((items)=>{
        res.render('manage-orders',{
           items : items,
           isUser : true , 
           isAdmin : true
        })
}).catch((err)=>console.log(err))    
}
exports.getSentOrders = (req,res,next)=>{ 
    orderModel.getOrdersByStatus('Sent').then((items)=>{
        res.render('manage-orders',{
           items : items,
           isUser : true , 
           isAdmin : true
        })
}).catch((err)=>console.log(err))    
}
exports.getCompletedOrders = (req,res,next)=>{
              
    orderModel.getOrdersByStatus('Completed').then((items)=>{
        res.render('manage-orders',{
           items : items,
           isUser : true , 
           isAdmin : true

        })
}).catch((err)=>console.log(err))    





}





exports.getOrdersByUser = (req,res,next)=>{
        orderModel.getOrdersByEmail(req.body.email).then((items)=>{
        res.render('manage-orders',{
           items : items,
           isUser : true , 
           isAdmin : true

        })
}).catch((err)=>console.log(err))    




}