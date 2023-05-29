var express = require('express');
var app = express();

const mongoose = require('mongoose');
db_URI='mongodb+srv://ingyhabiba:ingyhabiba_project_zeft@projectdb.yzwyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const User = require('./database1')
//mongodb+srv://ingyhabiba:ingyhabiba_project_zeft@projectdb.yzwyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//const User2 = require('./database2')
mongoose.connect(db_URI)
.then((result) => {app.listen(3997); console.log("Connected to the Database")})
.catch((err)=>{console.log("Error has occurred"); console.log(err)})
app.set('view engine' , 'ejs')
app.get('/' , (req , res) =>
{
   res.redirect('/home');
});
app.get('' , (req , res) =>
{
   res.redirect('/home');
});
app.use(express.urlencoded());
app.get('/signup' , (req , res) =>
{
   res.render('signup2');
});
app.post('/database1' , (req , res)=>
{
    var user = User(req.body);
    user.save()
        .then((result) => {res.redirect('/home')})
        .catch((err)=>{console.log(err);})
})

/*app.post('/database2' , (req , res)=>
{
    var user2 = User2(req.body);
    user2.save()
        .then((result) => {res.redirect('/home')})
        .catch((err)=>{console.log(err);})
});*/
/*var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());
app.use(express.urlencoded());*/



app.get('/get-user' , (req,res) =>
{
  // var my_email = req.params.email;
  // var my_password = req.body.loginpassword;
   /*const accountfound = User.find({
      email: email,
      password: password
    })*/
         // console.log(Object.values(User)[0].email);
   //      console.log(my_email);  
    User.find()
    .then((result1)=>{
   if(result1.length!=0){
    const accountfound = result1.forEach(user=>{
       console.log(user.email);
       //console.log(email);
       //user.email==my_email;
       //user.password==my_password;
    })
    .then((result) =>
    {
       res.render('home', {user: result})
    })
.catch((err)=>{console.log(err); window.alert("error occured")})
}
else{window.alert("error occured")}
    })
})



/*app.post('/database1/home',(req,res)=>
{
   var email = req.body.email;
   var password = req.body.password;
   var accountfound = false;
    User.find((user)=>{
      user.email=email;
      user.password=password;
   })
   .then((result) =>
        {
            res.render('home', {user: result});
            alert("You have logged in!");
        })
   .catch((err)=>{console.log(err); alert("Account doesn't exist!")})
});*/

/*app.post('/database1',(req,res)=>
{
   var email = req.body.email;
   var password = req.body.password;
   var accountfound = false;
   if(User.length>0)
   {
      User.forEach(user=> {
         if(email==user.email && password==user.password)
         {
            accountfound=true;
         }
      })
   }
   if(accountfound==true)
   {
      res.render('home');
   }
   else{
      res.render('login');
      alert("Account does not exist")
   }
});*/


/*
app.use(passport.initialize());
app.use(passport.session());
  
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/database1", (req, res) => {
   var username = req.body.username
   var password = req.body.password
   User.register(new User({ username: username }),
           password, function (err, user) {
       if (err) {
           console.log(err);
           return res.render("home");
       }
 
       passport.authenticate("local")(
           req, res, function () {
           //res.render("secret");
           res.alert("error");
       });
   });
});
app.post("/login", passport.authenticate("local", {
   successRedirect: "/home",
   failureRedirect: "/login"
}), function (req, res) {
});
*/



app.get('/database1/:id',(req,res)=>
{
    const id = req.params.id;
    console.log(id)
    User.findById(id)
        .then((result) =>
        {
            res.render('details', {user: result})
        })
        .catch((err)=>{console.log(err)})

})

app.get('/login' , (req , res) =>
{
   User.find()
        .then((result) =>
        {
            res.render('login' , {users : result})
        })
        .catch((err)=>{console.log(err)})
});
app.get('/home' , (req , res) =>
{
   res.render('home');
});
app.get('/about' , (req , res) =>
{
   res.render('about');
});
app.get('/booking' , (req , res) =>
{
   res.render('booking');
});
app.get('/endgameview' , (req , res) =>
{
   res.render('endgameview');
});
app.get('/kadview' , (req , res) =>
{
   res.render('kadview');
});
app.get('/f9view' , (req , res) =>
{
   res.render('f9view');
});
app.get('/hotelview' , (req , res) =>
{
   res.render('hotelview');
});
app.get('/bgrbb' , (req , res) =>
{
   res.render('bgrbb',{name:"Ingy"});
});
/*app.get('/login' ,(req , res) =>
{
    User.find()
        .then((result) =>
        {
            res.render('login' , {users : result})
        })
        .catch((err)=>{console.log(err)})
})*/
app.use(express.static(__dirname + '/views'));
