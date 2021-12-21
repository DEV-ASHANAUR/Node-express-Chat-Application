//external imports
const express = require('express');
const donenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');

//internal imports
const {notFoundHandler,errorHandler} = require('./middleware/common/errorHandler');

const app = express();
donenv.config();

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=>{
    console.log('connection success ..');
}).catch((err)=>{
    console(err);
})

//request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//set view engine
app.set("view engine","ejs");

//set satic folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/",loginRouter);
app.use("/users",usersRouter);
app.use("/inbox",inboxRouter);

//404 not found handling
app.use(notFoundHandler);

//coommon handler
app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`app listening to port ${process.env.PORT}`);
});