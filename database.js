require('dotenv').config()
const mongoose= require('mongoose')
const url=process.env.connurl
const connectdb= async()=>{
    try {
        mongoose.connect(url)
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectdb