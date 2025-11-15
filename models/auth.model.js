const mongoose = require('mongoose')
const bcrypt  = require('bcrypt')
const DB_URL ='mongodb://localhost:27017/online-shop'
let userSchema = mongoose.Schema({
          userName : String ,
          email : String ,        
          password : String,  
          isAdmin : {
            type : Boolean , 
            default : false
          } 
})
let User = mongoose.model('user',userSchema)//Collection products

 


exports.createNewUser = (userName,email,password)=>{
    //check if email exists
    return new Promise((resolve, reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            User.findOne({email : email}).then((user)=>{
                if(user){
      
                    reject('Email is used')
                }
                else{
                  bcrypt.hash(password,10).then((hashedPassword)=>{
                    let newUser = new User({
                        userName : userName , 
                        email : email,
                        password : hashedPassword,
                
                    })
                    newUser.save().then((value)=>{
                      
                        resolve('User added')
            }).catch((err)=>{ 
                 reject(err)
            })
                  }).catch((err)=>{
                
                    reject(err)

                  })
        
       
             
    }
}).catch(err=>{ 
    reject(err)
})
                
}).catch(err=>   reject(err))
}   
     )
    }


    exports.login = (email,password)=>{
        // check for email 
        // no ===> error 
        // yes ===> check for password
        // no ===> error
        //yes ===> set session 

        return new Promise((resolve,reject)=>{
            mongoose.connect(DB_URL).then(()=>{
                User.findOne({email : email}).then((user)=>{
                           if(!user){
                               
                               reject('There is no user matches this email')
                           }else{
                               bcrypt.compare(password , user.password).then((same)=>{
                                         if(!same){
                                      
                                            reject('Password is incorrect')
                                         }else{
                                       
                                            resolve({
                                                id:user._id,
                                                isAdmin : user.isAdmin
                                            })
                                         }
                               }) 
                           }
            }).catch((err)=> {
              
                reject(err)

            })

        }).catch((err)=>reject(err))

    })}




exports.getEmailByid =(id)=>{
    return new Promise ((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            User.findOne({_id : id}).then((user)=>resolve(user.email)).catch((err)=>reject(err))
        }).catch((err)=>reject(err))
    })
}