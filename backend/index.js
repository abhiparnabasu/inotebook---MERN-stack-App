const connectToMongo = require('./db');
const express = require('express')
<<<<<<< HEAD
const cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

 
app.use(cors())

app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook Backend listening on port http://localhost:${port}`)
=======

connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Rupam!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
>>>>>>> ffcc63c (43 commit)
})
