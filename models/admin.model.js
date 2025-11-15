const productsModel = require('./products.model');
exports.addProductByAdmin = (data) =>{
       
      return new Promise((resolve,reject) =>{
        
        productsModel.addNewProduct(data).then((result)=>{
            resolve(result)
        }).catch((err)=>reject(err))
      })
}
