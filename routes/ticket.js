const express = require('express');
const router = express.Router();
const {createTicket} = require('../controllers/ticketController')

router.post('/generateTicket',createTicket);

module.exports = router;