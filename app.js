var express = require("express");
var app = express();

app.locals.pretty = true;
app.set('view engin', 'jade');
app.set('views', './views');

app.use(express.static('public'));
app.get('/topic', function(req, res) {

 var output = `
  <a href = "/topic?id=0">JavaScript</a><br>
  <a href = "/topic?id=1">Nodejs</a><br>
  <a href = "/topic?id=2">Express</a><br><br>
  ${topics[req.query.id]}
`
 res.send(output);
 })
 app.get('/topic/:id/:mode', function(req, res) {
    res.send(req.params.id+','+req.params.mode)
 })

app.get('/template', function(req, res){
    res.resder('temp',{time:Date(), tintle:'jade'});
})
app.get('/', function(req, res){
  res.send('Hello home page')
})

app.listen(3000, function(){
  console.log('Connecting 3000 port!');
});
