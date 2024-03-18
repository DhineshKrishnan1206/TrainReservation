const User = require('../models/user')

const Signup = async (req, res) => {
    const { username, email, password, phonenumber, age } = req.body;
    const user = await User.create({ username, email, password, age, phonenumber });
    const exist = await User.findOne({email});
    if(exist){
        return res.json("Email Already Exsists")
    }
    return res.json(user);
}

module.exports = {Signup}