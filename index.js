var express = require('express')
var app = express()
var session = require('express-session');
var path = require('path');
var hash = require('pbkdf2-password')()

app.use(express.static(__dirname + '/view'));
app.set('views', './view')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res) => {
  res.render('login');
  
})

app.get('/admin',(req,res) =>{
   res.render('admin');

})


app.get('/computer', function(req, res){
   res.render('computer', {computer:    
                        [{title:'Cat1',image:"cat1.jpg"},
   						   {title:'Cat2',image:"cat2.jpg"},
   						   {title:'Cat3',image:"cat3.jpg"},
                        {title:'Cat4',image:"cat4.jpg"} ] , 
                        foo: 'Cat'})
})


app.listen(8080 ,() => {console.log('Server is running PORT 8080')})

