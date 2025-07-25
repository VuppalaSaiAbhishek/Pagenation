var mongoose = require('mongoose');
var itemsSchema = mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    discription:String,
    category:String,
    image:String,

});
var itemsModel = mongoose.model("items",itemsSchema);

module.exports = itemsModel;
