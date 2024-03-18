const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const cors = require('cors');
const db=require('./config/db');
const port = process.env.PORT || 5000

//routes
const authRoutes = require('./routes/auth');
const trainRoutes = require('./routes/train');
const ticketRoutes = require('./routes/ticket');


const app = express();
db.connectDB();
app.use(cors())
app.use(express.json());

//endpoints
app.use('/api',authRoutes)
app.use('/api/train',trainRoutes);
app.use('/api/ticket',ticketRoutes)

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`)
})
app.use('/',(req,res)=>{
    res.json("Backend Works")
})