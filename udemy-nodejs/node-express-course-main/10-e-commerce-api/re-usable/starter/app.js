//imports
require('dotenv').config();
require('express-async-errors');


//express
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

//rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

//database
const connectDB = require('./db/connect');

//routers
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');

//middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const {login} = require("./controllers/authController");

//invoking
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

//routes
app.get('/', (req, res) => {
    res.send('e-commerce api');
})

app.get('/api/v1', (req, res) => {
    // console.log(req.cookies);
    console.log(req.signedCookies);
    res.send('e-commerce api');
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

//middleware - notFound
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//start
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (err) {
        console.log(err);
    }
}
start();