const express=require('express');
const stylus=require('stylus');
const path=require('path');

const app=express();
app.use(stylus.middleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
}));
//app.use(stylus.middleware(path.join(__dirname+'./public')));
app.use(express.static(path.join(__dirname, 'public')));
 app.listen(4000,()=>{
    console.log("SEVRER RUNNING");
 })
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})