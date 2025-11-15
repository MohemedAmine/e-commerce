const mongoose = require('mongoose');
const cartModel = require('./cart.model');
const authModel = require('../models/auth.model')
const DB_URL = 'mongodb://localhost:27017/online-shop';

let orderSchema = mongoose.Schema({
  productName: String,
  amount: Number,
  price : Number,
  address: String,
  status: String,
  timestamp: Number,
  userId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'

  },
  cartId: String
});

let OrderItem = mongoose.model('order', orderSchema); 

exports.addNewItem = (data) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_URL).then(() => {
      cartModel.deleteItem(data.cartId)
        .then(() => {     
          mongoose.connect(DB_URL).then(() => {
              let item = new OrderItem(data);
              item.save()
                .then((result) => {
                  resolve(result);
                })
                .catch((err) => {
                  reject(err);
                })
          }).catch((err)=>
          reject(err))
        })
        .catch((err) => {
          reject(err);
        })
    }).catch((err)=>reject(err));
  });
};




exports.addAllItems = async (id, address) => {
  try {
    const carts = await cartModel.getItemByUser(id);
    if (!carts) {
      throw new Error('No items found in the cart for the user.');
    }

    const orders = carts.map(cart => ({
      productName: cart.name,
      amount: cart.amount,
      price: cart.price,
      address: address,
      status: 'Pending',
      timestamp: Date.now(),
      userId: id,
      cartId: cart._id,
    }));


    await cartModel.deleteItemByUser(id);

    await mongoose.connect(DB_URL);

    const result = await OrderItem.insertMany(orders);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    mongoose.connection.close();
  }
};
exports.getItemsByUser = (id) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_URL).then(() => {
      OrderItem.find({ userId: id }).then(items => {
        
        resolve(items);
      }).catch(err => {
        reject(err)
      })
    }).catch(err => {
      reject(err);
    })
  })
}



exports.deleteOrder = (id)=>{
      return new Promise ((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
        OrderItem.deleteOne({_id:id}).then((result)=>{
          resolve(result)
        }).catch((err)=>{reject(err)})
}).catch((err)=>{
   reject(err)
})})
   
   


}




exports.CancelAll = (id)=>{
        return new Promise((resolve,reject)=>{
          mongoose.connect(DB_URL).then(()=>{
                 OrderItem.deleteMany({
                  userId : id
                 }).then((result)=>{resolve(result)}).catch((err)=>reject(err))
          }).catch((err)=>{
               reject(err)
          })
          
        })


}



exports.getAllOrders=()=>{
  return new Promise((resolve, reject) => {
    
    mongoose.connect(DB_URL).then(() => {
      OrderItem.find().populate('userId','email -_id').then((result)=>{
        resolve(result)
      }).catch((err)=>reject(err))
    }).catch(err => {
      reject(err);
    })
  })
}

exports.getOrdersByStatus=(status)=>{
  return new Promise((resolve, reject) => {
    
    mongoose.connect(DB_URL).then(() => {
      OrderItem.find({status:status}).populate('userId','email -_id').then((result)=>{
        resolve(result)
      }).catch((err)=>reject(err))
    }).catch(err => {
      reject(err);
    })
  })
}

exports.getOrdersByEmail=(email)=>{
  return new Promise((resolve, reject) => {
    
    mongoose.connect(DB_URL).then(() => {

        OrderItem.find().populate({
          path: 'userId',
          select: 'email -_id',
        }).then((result)=>{
          console.log(result)
                console.log(email)
                let filteredResult = result.filter(result => result.userId.email === email);
                console.log(result)
                console.log(filteredResult)
                  resolve(filteredResult)
        }).catch((err)=>reject(err))  
    }).catch(err => {
      reject(err);
    })
  })
}

exports.updateStatus = (id,newStatus)=>{
      return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
          OrderItem.updateOne({ _id: id },  newStatus ).then((result)=>resolve(result)).catch((err)=>reject(err))
        }).catch((err)=>reject(err))
      })
}