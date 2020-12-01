require('colors');

const mongoose = require('mongoose');

const connectDB = async()=>{
    const conn = await mongoose.connect(
        process.env.DATABASE_URL, 
        {useCreateIndex:true, useFindAndModify: false , useNewUrlParser: true , useUnifiedTopology: true},
        ()=>{
            console.log('Connected to mongodb successfully'.green.bold);
        })
}

module.exports = connectDB