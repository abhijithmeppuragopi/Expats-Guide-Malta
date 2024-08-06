const express=require('express');

const path=require('path');
const ejsMate=require('ejs-mate');
const AppError=require('./appError');
const Article=require('./model/newsModel');
const Questions=require('./model/questionsModel');
const mongoose=require('mongoose');
const Comments = require('./model/commentsModel');
const methodOverride= require('method-override');
const session= require('express-session');
const flash=require('connect-flash');
const User= require('./model/UserModel');
const passport= require('passport');
const Localstrategy= require('passport-local');
const {isLoggedIn}=require('./middleware');

const app=express();


app.engine('ejs',ejsMate);
app.set('view engine','ejs');


mongoose.connect('mongodb://127.0.0.1:27017/expatsmatemalta') 
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
  console.log("Database connected");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.use(methodOverride('_method'));

app.use(session({
    secret: 'asecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly:true,
        expires:Date.now()+ 1000*60*60*24*7,
        maxAge:Date.now()+ 1000*60*60*24*7
     }
  }))
  app.use(flash());
  

    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.use(new Localstrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    app.use((req,res,next)=>{
        res.locals.success=req.flash('success');
        res.locals.error=req.flash('error');
        res.locals.currentUser=req.user;
        next();
        });

app.get('/',(req,res,next)=>{
    console.log(req.user);
    try{
    res.render("index.ejs");
}
catch(e){
next(e)
}
})
app.get('/login',(req,res)=>{
    res.render("User/login.ejs");
})
app.post('/login',passport.authenticate('local', {failureFlash:true, failureRedirect: '/login' }),(req,res)=>{
    req.flash('success','Welcome back');
    res.redirect('/');
})

app.get('/register',(req,res)=>{
    res.render("User/register.ejs");
})
app.post('/register',async (req,res)=>{
    try{
        const {username,email,password}=req.body;
        const user= await new User({email, username});
        const newUser=await User.register(user,password);
        req.login(newUser,function(err){
            if(err){
                next(err);
        }
        else{
            req.flash('success','Succesfully registered');
            return res.redirect('/');
        }})
        
    }catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }
    })

app.get('/logout', (req, res, next) => {
    req.logout(function (err) {
            if (err) {
                return next(err);
            }
            req.flash('success', 'Goodbye!');
            res.redirect('/');
        });
    });    
app.get('/news',async (req,res)=>{
    const Articles=await Article.find()
    .sort({_id: -1})
    .limit(10)
    res.render('news.ejs',{Articles});
})
app.get('/news/:id',async (req,res)=>{
    const Articles=await Article.find();
    res.render('Admin/newArticle.ejs',{Articles});
})
app.get('/news/newarticle',(req,res)=>{
    res.render('Admin/newArticle.ejs');
})
app.get('/news/:id/edit',async (req,res)=>{
    const {id}=req.params;
    const news= await Article.findById(id);
    
    res.render('Admin/editArticle.ejs',{news});
})

app.post('/news/newarticle',async (req,res)=>{
    const newArticle = await new Article({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        tags:req.body.tags})
    
    newArticle.save();
    req.flash('success','new news updated');
    res.redirect('/news');

})
app.get('/news/:id/edit',async (req,res)=>{
    const {id}=req.params;
    const news= await Article.findById(id);
    
    res.render('Admin/editArticle.ejs',{news});
})
app.delete('/news/:id/delete',async (req,res)=>{
    const {id}=req.params;
    const news= await Article.findByIdAndDelete(id);
    res.redirect('/news');
})
app.get('/skillcard',(req,res)=>{
    // throw new AppError('404');
    res.render("skillcard.ejs");
})
app.get('/workpermit',(req,res)=>{
    res.render("workPermit.ejs");
})
app.get('/drivinglicence',(req,res)=>{
    res.render("driving-license.ejs");
})
app.get('/getqualified',(req,res)=>{
    res.render("get-qualified.ejs");
})


app.get('/faq', async (req,res)=>{
   const allQuestions=await Questions.find()
  .sort({_id: -1})
  .limit(5)
  .populate({
    path: 'comments',
    populate: {
        path: 'author'
    }
}).populate('author');

//   .populate('comments')
//   .populate('author')

for (let id of allQuestions){
    // console.log(id.comments[0]);
const com = await Questions.find(id._id).populate('comments').exec();
    
}
   
 
    res.render("faq.ejs",{allQuestions});
})
// app.get('/fa',async(req,res)=>{
//     const q=await Questions.find({});
//     res.render("fa.ejs");
// })
app.post('/faq', isLoggedIn, async (req,res)=>{
    const quest=req.body;
    const newQuestion=await new Questions({
        question:req.body.question
    })
    newQuestion.author=req.user._id;
    newQuestion.save()
    const q=await Questions.find({});
    // console.log(q);
    res.redirect("/faq");
})
app.post('/faq/:id/comment',isLoggedIn,async (req,res)=>{
    const id=req.params.id;
    const Question= await Questions.findOne({_id:id});
    // console.log(Question);
    // console.log(req.body.comment);
    
    const comment= await new Comments({
    comment:req.body.comment
    })
    comment.author=req.user._id;
    await comment.save();
    

    Question.comments.push(comment);
   
    await Question.save();
   
    // const com = await Questions.findOne({_id:id}).populate('comments').exec();
    // console.log(com.comments[0].comment);





const q=await Questions.find({});
    res.redirect("/faq");

})
app.get('/familyvisa',(req,res)=>{
    res.render("family-visa.ejs");
})
app.get('/touristinfo',(req,res)=>{
    res.render("tourist-info.ejs");
})
app.get('/popular',(req,res)=>{
    res.render("popular.ejs");
})

app.all('*',(req,res)=>{
    res.render('invalid.ejs')
})

app.use((err, req, res, next) => {
    if(!err.message) err.message="Something Went wrong";
    // const {status='500',message="Something Went wrong",stack}=err;
    res.render('Error.ejs',{err});
  })



app.listen('3000',()=>{
    console.log("im listening");
})
