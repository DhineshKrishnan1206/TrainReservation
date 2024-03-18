const express = require('express')
const router=express.Router()
const { newTrain,getAll } = require('../controllers/trainController')


router.post('/createTrain',newTrain);
router.get('/getAllTrains',getAll);

module.exports = router;