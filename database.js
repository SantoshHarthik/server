const mongoose= require('mongoose')
const url='mongodb+srv://Harthik:1234@cluster0.za9ck1n.mongodb.net/LibraryMngmt?retryWrites=true&w=majority'
const connectdb= async()=>{
    try {
        mongoose.connect(url)
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectdb