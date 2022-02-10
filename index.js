const express = require('express');
const mongoose = require('mongoose');
const { dbString } = require('./config.js')
const userRouter = require('./routes/UserRoutes')

const db = dbString.dbURL;

const app = express();
app.use(express.json()); 

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running on port 3000') });