const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

//DB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successful");
})

const tutorsRouter = require('./routes/tutors');
const lessonsRouter = require('./routes/lessons')
const coursesRouter = require('./routes/courses')
const studentRouter = require('./routes/student')

app.use('/tutors', tutorsRouter);
app.use('/lessons', lessonsRouter);
app.use('/courses', coursesRouter);
app.use('/students', studentRouter);

//Server start
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})
