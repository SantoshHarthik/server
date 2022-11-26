
const express=require('express')
const app= express()
const cors= require('cors')


const connectdb= require('./database')
const router= require('./bookroutes')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
connectdb()


app.use('/',router)

app.listen(5000)