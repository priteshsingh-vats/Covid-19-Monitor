var request = require("request");
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
var request = require("request");
var p;
var options = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
  headers: {
    'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
    'x-rapidapi-key': '7e0001ce62mshea562a1794af41ap1623d1jsn02489908e1e2'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);
      p = JSON.parse(body);
	console.log(p);
});
app.get("/",function(req,res)
{
   res.render("covidworld.ejs",{p:p});
});
app.listen((process.env.PORT||3000),function()
{
    console.log("The server has started");
});