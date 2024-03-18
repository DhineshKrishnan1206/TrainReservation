const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Train = require('./train');

const ticketSchema = new Schema({
    train: { type: Schema.Types.ObjectId, ref: 'Train', required: true },
    passenger_name: { type: String, required: true },
    seat_number: { type: String }, 
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['Booked', 'Canceled'], default: 'Booked' },
    payment: {
        method: { type: String },
        amount: { type: Number }
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = { Ticket };
