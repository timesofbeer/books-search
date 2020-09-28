const express =require('express');
const routes = require('./routes');
const env =require('dotenv').config();
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.use('/api',routes);
app.listen(process.env.PORT,(err)=>{
 if(err){
     console.log(err);
 } else {
     console.log("application running on ",process.env.PORT)
 }
});

