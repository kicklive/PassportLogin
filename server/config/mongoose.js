var mongoose=require('mongoose');

module.exports=function(config){
mongoose.connect(config.db);
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error...'));
db.once('open',function callback(){
    console.log('Spendtracker2018 db open');
});

var budget=require("../models/budget");
var transactions=require("../models/transactions");
var product=require("../models/product");
var account=require("../models/account");
};
