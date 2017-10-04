var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');

var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Views
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
