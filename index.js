const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>console.log(`Server has started on ${PORT}`))

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
},(err)=>{
  if(err) throw err;
  else console.log('connection to mongo is successful');
})

app.use('/user', require('./routes/userRouter'))