var express=require('express')
var app=express();
app.get('/',function(req,res)
{
    var mydata=["Red","Blue","Green"]
    res.render('login1.ejs',
        {
            data:mydata
        })
    res.end()
})
app.listen(1337);
console.log('hiiiiiiii connected');