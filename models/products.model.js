const mongoose = require('mongoose')
const DB_URL ='mongodb://localhost:27017/online-shop'
let productSchema = mongoose.Schema({
          name : String ,
          image : String ,
          price:Number , 
          description : String,
          category : String
   
})
let Product = mongoose.model('product',productSchema)//Collection products

 


exports.getAllProducts = ()=>{
  //connect to db
  //get products 
  //disconnect
 return new Promise ((resolve,reject)=>{
    mongoose.connect(DB_URL).then(()=>{
    Product.find().then(prodcuts=>{
  
        resolve(prodcuts)
        
    })  
}).catch(err=>{
 
    reject(err)}).finally(() => {
       
    });


})   
}
exports.getProductsByCategory = (category)=>{
    //connect to db
    //get products 
    //disconnect
   return new Promise ((resolve,reject)=>{
      mongoose.connect(DB_URL).then(()=>{
      Product.find({
        category : category
      }).then(products=>{
      
          resolve(products)
          
      })  
  }).catch(err=>
    {
      
        reject(err)
    }
   ).finally(() => {
    // Disconnect from the MongoDB database after the operation
    
});
  
  
  })   
  }



  exports.getProductById = id=>{
    //connect to db
    //get products 
    //disconnect
   return new Promise ((resolve,reject)=>{
      mongoose.connect(DB_URL).then(()=>{
      Product.findById(id).then(product=>{
   
          resolve(product)
          
      })  
  }).catch(err=>
    {
 
        reject(err)
    }
   ).finally(() => {

   
});
  
  
  })   
  }


  exports.addNewProduct = (data)=>{

    return new Promise((resolve,reject)=>{
      mongoose.connect(DB_URL).then(()=>{
          let item = new Product(data);
              item.save().then((result) => {
                   resolve(result)
              }).catch((err) => {
                reject(err)
              })
      }).catch((err)=>reject(err))
    })
  }