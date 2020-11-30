require('dotenv').config();
require('colors');
const express = require('express');
const bootcamps = require('./routes/bootcamps')



const app = express();
app.use('/api/v1/bootcamps',bootcamps)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`.green.bold);
});