var express = require('express');
var app = express();
var path    = require("path");

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.use(express.static(path.join(__dirname, 'src/client/n')));



app.get('/custom',function(req,res){
    res.sendFile(path.join(__dirname+'/src/client/public/index.html'));
});

var server = app.listen(process.env.PORT || 5000, function () {


  var port = server.address().port;

  console.log("Example app listening at %s", port)

})