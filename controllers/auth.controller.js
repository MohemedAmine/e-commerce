const authModel = require('../models/auth.model');
const validationResult = require('express-validator').validationResult
exports.getSignUp = (req,res,next)=>{

   res.render('signUp',{
      'authError' : req.flash('authError')[0] , 
      'validationErrors' : req.flash('validationErrors'),
      isUser :false ,
      isAdmin : false 
    })
}
exports.postSignUp = (req,res,next)=>{
             if(validationResult(req).isEmpty()){
             authModel.createNewUser(req.body.username,req.body.email,req.body.password).then(()=>{
                   res.redirect('/login')
             }).catch((err)=>{
                req.flash('authError', err)
                res.redirect('/signUp')
             })}else {
               req.flash('validationErrors' , validationResult(req).array())
               res.redirect('/signUp')
             }
     
}
exports.getLogin = (req,res,next)=>{
            console.log(req.session.userId)
    res.render('login',{
      'authError' : req.flash('authError')[0],
      'validationErrors' : req.flash('validationErrors'),
      isUser : false , 
      isAdmin : false
    })
    
}
exports.postLogin = (req,res,next)=>{
   if(validationResult(req).isEmpty()){
authModel.login(req.body.email, req.body.password).then((result)=>{
   req.session.userId  = result.id
   req.session.isAdmin = result.isAdmin
   res.redirect('/')
 
}).catch((err)=>{
   req.flash('authError', err)
   res.redirect('/login')

})     }else {
     req.flash('validationErrors' , validationResult(req).array())
     res.redirect('/login')

}
   
}


exports.logout = (req,res,next)=>{
   req.session.destroy(()=>{
         res.redirect('/')
   })

}