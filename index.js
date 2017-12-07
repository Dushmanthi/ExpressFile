var express = require('express');
var app = express();
app.use(function (req, res, next) {
    
       // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    
       // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
       // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
       // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
       // Pass to next layer of middleware
        next();
    });


app.get('/names', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(["saranya", "Dushi"]));
});

app.listen(3000);

// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.listen(3000);

// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.post('/hello', function(req, res){
//    res.send("You just called the post method at '/hello'!\n");
// });

// app.listen(3000);