const mongose=require('mongoose');

mongose.connect("mongodb://127.0.0.1:27017/TechHeavenE-commerce");

const userschema=new mongose.Schema({
  email:String,
  name:String,
  password:String,
  address1:String,
  address2:String,
  city:String,
  province:String,
  postalcode:Number,
  country:String,
})

module.exports=mongose.model("users",userschema)

