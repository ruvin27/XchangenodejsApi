const mongoose = require("mongoose")
const User = require('./Models/User');
const Post = require('./Models/Post');
const Booking = require('./Models/Booking');

const express = require("express")
const bodyparser = require('body-parser')
const app = express();   
app.use(bodyparser.json());
var cors = require('cors')

app.use(cors())
const MongoUri = 'mongodb+srv://ruvin:rujiya@cluster0.lqsiu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(MongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})

mongoose.connection.on("error",(error)=>{
    console.log(error)
})

app.get("/",(req,res)=>{



    res.send('welcome')
})


app.post('/register',(req,res)=>{
    const newuser = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        uid:req.body.uid,

    })
    newuser.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})

app.post('/book',(req,res)=>{
    const newBooking = new Booking({
        seller: req.body.seller,
        buyer: req.body.buyer,
        notified: req.body.notified,
        productID: req.body.productID,
        product: req.body.product,
        buyername: req.body.buyername,
        time: req.body.time

    })
    newBooking.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})
app.get('/post',(req,res) =>{
    Post.find()
    .sort({time: 'descending'})
    .then(posts => res.json(posts))
})

app.get('/notification/:id',(req,res) =>{
    Booking.find({seller : req.params.id})
	.sort( {time : -1 })
	.then(posts => res.json(posts))
})
app.get('/notification/icon/:id',(req,res) =>{
    Booking.find({seller : req.params.id, notified: "f"})
	.then(posts => res.json(posts))
})

app.patch('/notification/:id',(req,res) =>{
    var myquery = { notified: "f", seller :req.params.id };
  var newvalues = { $set: { notified: "t" } };
    Booking.updateMany(myquery, newvalues)
	.then(posts => res.json(posts))
})

app.get('/uploads/:id', (req, res) => {
	Post.find({ email : req.params.id})
	.then(user => {
    res.json(user)
  })
	.catch(err => res.json({success: false}));
});

app.post('/post',(req,res)=>{
    const newpost = new Post({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        product:req.body.product,
        imagename: req.body.imagename,
        description: req.body.description,
        url: req.body.url,
        time: req.body.time

    })
    newpost.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})

app.get('/item/:id', (req, res) => {
	Post.find({ imagename : req.params.id})
	.then(user => {
    res.json(user)
  })
	.catch(err => res.json({success: false}));
});

app.delete('/delete/:id', (req, res) => {
	Post.findByIdAndRemove(req.params.id)
	.then(user => {
    res.json(user)
  })
	.catch(err => console.log(err));
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("server running");

const mongoose = require("mongoose")
const User = require('./Models/User');
const Post = require('./Models/Post');
const Booking = require('./Models/Booking');

const express = require("express")
const bodyparser = require('body-parser')
const app = express();   
app.use(bodyparser.json());
var cors = require('cors')

app.use(cors())
const MongoUri = 'mongodb+srv://ruvin:rujiya@cluster0.gsq4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(MongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})

mongoose.connection.on("error",(error)=>{
    console.log(error)
})

app.get("/",(req,res)=>{



    res.send('welcome')
})


app.post('/register',(req,res)=>{
    const newuser = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        uid:req.body.uid,

    })
    newuser.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})

app.post('/book',(req,res)=>{
    const newBooking = new Booking({
        seller: req.body.seller,
        buyer: req.body.buyer,
        notified: req.body.notified,
        productID: req.body.productID,
        product: req.body.product,
        buyername: req.body.buyername,
        time: req.body.time

    })
    newBooking.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})
app.get('/post',(req,res) =>{
    Post.find()
    .sort({time: 'descending'})
    .then(posts => res.json(posts))
})

app.get('/notification/:id',(req,res) =>{
    Booking.find({seller : req.params.id})
	.sort( {time : -1 })
	.then(posts => res.json(posts))
})
app.get('/notification/icon/:id',(req,res) =>{
    Booking.find({seller : req.params.id, notified: "f"})
	.then(posts => res.json(posts))
})

app.patch('/notification/:id',(req,res) =>{
    var myquery = { notified: "f", seller :req.params.id };
  var newvalues = { $set: { notified: "t" } };
    Booking.updateMany(myquery, newvalues)
	.then(posts => res.json(posts))
})

app.get('/uploads/:id', (req, res) => {
	Post.find({ email : req.params.id})
	.then(user => {
    res.json(user)
  })
	.catch(err => res.json({success: false}));
});

app.post('/post',(req,res)=>{
    const newpost = new Post({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        product:req.body.product,
        imagename: req.body.imagename,
        description: req.body.description,
        url: req.body.url,
        time: req.body.time

    })
    newpost.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})

app.get('/item/:id', (req, res) => {
	Post.find({ imagename : req.params.id})
	.then(user => {
    res.json(user)
  })
	.catch(err => res.json({success: false}));
});

app.delete('/delete/:id', (req, res) => {
	Post.findByIdAndRemove(req.params.id)
	.then(user => {
    res.json(user)
  })
	.catch(err => console.log(err));
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("server running");
  res.json(user)
  })
	.catch(err => console.log(err));
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("server running");
})