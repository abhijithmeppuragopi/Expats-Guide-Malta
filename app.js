const express=require('express');
const app=express();
const path=require('path');
const ejsMate=require('ejs-mate');
const AppError=require('./appError')

app.engine('ejs',ejsMate);
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.get('/home',(req,res,next)=>{
    try{
    res.render("index.ejs");
}
catch(e){
next(e)
}
})
app.get('/skillcard',(req,res)=>{
    // throw new AppError('404');
    res.render("skillcard.ejs");
})
app.get('/workpermit',(req,res)=>{
    res.render("workpermit.ejs");
})
app.get('/drivinglicence',(req,res)=>{
    res.render("driving-license.ejs");
})
app.get('/getqualified',(req,res)=>{
    res.render("getqualified.ejs");
})
app.get('/news',(req,res)=>{
    res.render("news.ejs");
})
app.get('/faq',(req,res)=>{
    res.render("faq.ejs");
})
app.get('/familyvisa',(req,res)=>{
    res.render("family-visa.ejs");
})
app.get('/touristinfo',(req,res)=>{
    res.render("tourist-info.ejs");
})

app.use((err, req, res, next) => {
    if(!err.message) err.message="Something Went wrong";
    // const {status='500',message="Something Went wrong",stack}=err;
    res.render('Error.ejs',{err});
  })



app.listen('3000',()=>{
    console.log("im listening");
})
