require('dotenv').config();
require('colors');
require('./config/db')()

const express = require('express');
const bootcamps = require('./routes/bootcamps')
const morgan = require('morgan')


const app = express();
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use('/api/v1/bootcamps',bootcamps)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`.green.bold);
});