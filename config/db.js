const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected successfully${mongoose.connection.host}`.bgMagenta.white);// vo cluster ka address store karta hai
    } catch (error) {
        console.log(`mongo connection error`.bgRed.white);
    }
}

module.exports = connectDB;