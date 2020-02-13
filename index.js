var express = require('express')
var app = express()

app.use(express.static(__dirname + '/view'));
app.set('views', './view')
app.set('view engine', 'ejs')

app.get('/computer', function(req, res){
   res.render('computer', {computer:    
                        [{title:'Cat1',image:"cat1.jpg"},
   						{title:'Cat2',image:"cat2.jpg"},
   						{title:'Cat3',image:"cat3.jpg"},
                        {title:'Cat4',image:"cat4.jpg"} ] , 
                        foo: '5835512007'})
})

app.listen(8000 ,() => {console.log('Server is running PORT 8000')})

