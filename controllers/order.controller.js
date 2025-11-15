const orderModel = require('../models/order.model')
exports.postOrder =(req,res,next)=>{


       

         if(req.body.buttonType === 'order')                 
        {  orderModel.addNewItem({
          productName : req.body.productName  ,
          amount :req.body.amount ,
          price:req.body.price,
          address : req.body.address ,
          status : 'Pending',
          timestamp : Date.now(),
          userId : req.session.userId,
          cartId :  req.body.cartId
          }).then(()=>{
              res.redirect('/orders')
          }).catch(()=>{
            res.redirect('/verifyOrder')

          })} else {


            orderModel.addAllItems(req.session.userId,req.body.address).then(()=>res.redirect('/orders')).catch(()=>res.redirect('/verifyOrder'))

          }

     


          



}




exports.getVerifyOrder = (req,res,next)=>{
  if(req.query.buttonType==='order') {res.render('verifyOrder',{
    productName: req.query.name,
    cartId :  req.query.cartId,
    price : req.query.price,
    amount : req.query.amount,
    buttonType:req.query.buttonType,
    isUser:true,
    isAdmin : req.session.isAdmin,
}) 
console.log(req.query.buttonType)

}
    else{ res.render('verifyOrder',{
      buttonType:req.query.buttonType,
      isUser:true,
      isAdmin : req.session.isAdmin,
  }) }
}




exports.getOrders = (req,res,next) =>{
           orderModel.getItemsByUser(req.session.userId).then(items=>  {
            res.render('orders',{
              items : items ,
              isUser : true,
              isAdmin : req.session.isAdmin,
            })
           }).catch((err) => console.log(err))
}   


exports.cancelOrder =(req,res,next) =>{
          orderModel.deleteOrder(req.body.id).then(()=>{
                     res.redirect('/orders')

          }).catch(()=>{
            res.redirect('/orders')
          })
}

exports.cancelAllOrder =(req,res,next) =>{
  orderModel.CancelAll(req.session.userId).then(()=>{
    res.redirect('/')
  }).catch(()=>{res.redirect('/orders')})
}