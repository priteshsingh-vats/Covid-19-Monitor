var request = require("request");
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
var request = require("request");
var p;
var state=[];
var scase =[];
var  labels=[];
var  data =[];
var options = {
  method: 'GET',
  url: 'https://api.covid19india.org/data.json',
};
request(options, function (error, response, body) {
	if (error) throw new Error(error);
      p = JSON.parse(body);
      var j=0;
      for(var i=31;i<p.cases_time_series.length;i=i+7) 
   {
  labels[i-31-6*j] =p.cases_time_series[i].date;
 data[i-31-6*j] =p.cases_time_series[i].totalconfirmed;
 j++;
 }
 for(var i=1;i<p.statewise.length;i++)
 {
   state[i-1]=p.statewise[i].state;
   scase[i-1] =p.statewise[i].confirmed;
 }
});

app.get("/",function(req,res)
{
   res.render("covidworld.ejs",{p:p,
  data:data,
  labels:labels,
  state:state,
  scase:scase,
  })
});
app.listen((process.env.PORT||3000),function()
{
    console.log("The server has started");
});

