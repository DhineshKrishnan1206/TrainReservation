const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const trainSchema = new Schema({
    train_no:String,
    train_name:String,
    route:String,
    arrival:String,
    departure:String,
    seat_capacity:Number
});

const Train = mongoose.model('Train',trainSchema);

module.exports={
    Train
}