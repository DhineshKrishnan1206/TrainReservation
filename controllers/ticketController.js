const { Ticket } = require('../models/ticket');

const createTicket = async (req, res) => {
    try {
        const { train,
            passenger_name,
            seat_number,
            date, status, payment
        } = req.body;
        const ticket = await Ticket.create({
            train,
            passenger_name,
            seat_number,
            date, status, payment
        })
        return res.json(ticket)
    } catch (error) {
        console.log(error);
    }
}

module.exports= {createTicket}