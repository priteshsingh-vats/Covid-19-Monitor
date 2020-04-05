var request = require("request");
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
var request = require("request");
var p;
var options = {
  method: 'GET',
  url: 'https://api.covid19india.org/data.json',
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);
      p = JSON.parse(body);
});
app.get("/",function(req,res)
{
   res.render("covidworld.ejs",{p:p});
});
app.listen((process.env.PORT||3000),function()
{
    console.log("The server has started");
});