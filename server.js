require('dotenv').config()
require('colors')

const express = require('express') 
const app = express();

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`.green.bold);
});