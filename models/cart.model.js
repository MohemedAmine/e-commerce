const mongoose = require('mongoose')
const DB_URL ='mongodb://localhost:27017/online-shop'
let cartSchema = mongoose.Schema({
          name : String ,
          price:Number , 
         amount : Number,
         userId : String,
         productId : String,
         timestamp : Number
          
   
})
let CartItem = mongoose.model('cart',cartSchema)//Collection products

 


exports.addNewItem = (data,id) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(DB_URL).then(() => {
        CartItem.findOne({ productId: data.productId,
                   userId : id,
        }).then((item) => {
          if (!item) { 
            let item = new CartItem(data);
            item.save().then((value) => {
           
              resolve()
            }).catch((err) => {
      
              reject(err)
            })
          } else {
            const newAmount = parseInt(data.amount, 10) + parseInt(item.amount, 10);
            CartItem.updateOne({ _id: item._id },  {
              amount : newAmount , 
              timestamp : Date.now()
             }).then((result) => {
              resolve(result)
            }).catch((err) => {
              reject(err)
            })
          }
        }).catch((err) => {
          reject(err);
      })
      }).catch((err)=>reject(err));
    });
  };
  


exports.getItemByUser  = userId => {
      return new Promise ((resolve,reject) => { 
        
        mongoose.connect(DB_URL).then(()=>{
        CartItem.find({
            userId : userId,
            
        }).sort({ timestamp: 1 }).then(items=>{

        resolve(items)
    }).catch(err=>{
      reject(err)
    })
  }).catch(err=>reject(err))

      })
}


exports.editItem = (id, newData) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(DB_URL).then(() => {
        // Use updateOne to update the document with the specified id
        CartItem.updateOne({ _id: id },  newData )
          .then(result => {
      
            resolve(result);
          })
          .catch(err => {
        
            reject(err);
          })
      }).catch(err => reject(err));
    });
  };


  exports.deleteItem = (id) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(DB_URL).then(() => {
        // Use deleteOne to remove the document with the specified id
        CartItem.deleteOne({ _id: id })
          .then(result => {
           
            resolve(result);
          })
          .catch(err => {
           
            reject(err);
          })
      }).catch(err => reject(err));
    });
  };
  exports.deleteItemByUser = (id)=>{
    return new Promise((resolve, reject) => {
      mongoose.connect(DB_URL).then(() => {
        // Use deleteOne to remove the document with the specified id
        CartItem.deleteMany({ userId: id })
          .then(result => {
       
            resolve(result);
          })
          .catch(err => {
      
            reject(err);
          })
      }).catch(err => reject(err));
    });

  }


