const {Train} = require('../models/train');

const newTrain = async (req, res) => {
    try {
        const { train_no, train_name, route, arrival, departure, seat_capacity } = req.body;
        const train = await Train.create({ train_no, train_name, route, arrival, departure, seat_capacity });
        return res.json(train);
    } catch (error) {
        console.log(`Error`, error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAll = async(req,res)=>{
    try {
        const train=await Train.find();
        return res.json(train);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { newTrain,getAll };
