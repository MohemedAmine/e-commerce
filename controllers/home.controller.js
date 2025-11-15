const productsModel = require('../models/products.model');

exports.getHome = (req,res,next)=>{
         
      //get products
      //render index.ejS


//get category
//if category && category !==all
// filter
//else render all
   let validCategories = ['clothes','phones','computers']
   let category = req.query.category ;
   if (category && validCategories.includes(category)){

             productsModel.getProductsByCategory(category).then((products)=>{
                res.render('index' , {
                  products : products,
                  isUser : req.session.userId ,
                  isAdmin : req.session.isAdmin,
                  validationError : req.flash('validationErrors')[0],
            })
            }
          )

   } else {
                  
          productsModel.getAllProducts().then((products)=>{
            res.render('index' , {
                  products : products,
                  isUser : req.session.userId ,
                  isAdmin : req.session.isAdmin,
                  validationError : req.flash('validationErrors')[0],


            })
            }
          ) 
   }


          


      
}

