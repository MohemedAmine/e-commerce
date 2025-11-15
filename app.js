const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const SessionStore = require('connect-mongodb-session')(session)         //المخزن الذي يخزن الsession
const flash = require('connect-flash');
const homeRouter = require('./routes/home.route')
const productRouter = require('./routes/product.route')
const cartRouter = require('./routes/cart.route')
const orderRouter =  require('./routes/order.route')
const authRouter = require('./routes/auth.route')
const adminRouter = require('./routes/admin.route')
app.use(express.static(path.join(__dirname ,'assets')))
app.use(express.static(path.join(__dirname ,'images')))
app.use(flash())

const STORE = new SessionStore({
    uri:'mongodb://localhost:27017/online-shop',
    collection : 'sessions'
})

app.use(session({
    secret : 'This is my secret to hash express sessions ......',
    saveUninitialized : false ,
    resave: false, 
    store : STORE
}))
app.set('view engine' , 'ejs')
app.set('views','views');//Default 
app.use('/',homeRouter)
app.use('/product',productRouter)
app.use('/cart',cartRouter)
app.use('/',orderRouter)
app.use('/',authRouter)
app.use('/admin' , adminRouter )
app.get('/error' ,(req,res,next)=>{
    res.status(500)
    res.render('error',{
        isUser : req.session.userId, 
        isAdmin :req.session.isAdmin
     })})
app.use((err,req,res,next)=>{
    res.redirect('/error')
})
app.get('/not-admin',(req,res,next)=>{
    res.status(403)
    res.render('not-admin',{
        isUser : req.session.userId,
        isAdmin : false
    })
})
app.listen( 3000, () => {
    console.log(`Server listen on port 3000`);
});
