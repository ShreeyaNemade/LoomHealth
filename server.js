const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


//env configuration
dotenv.config();

//routes import
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

//mongodb connection
connectDB();

//rest objects
const app = express();

//middleware
app.use(cors());
app.use(express.json());// client data in json format    
app.use(morgan('dev'));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white);
});