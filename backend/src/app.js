const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
const wordsRouter = require('../routers/words.js')
app.use(wordsRouter) 
app.listen(port,()=>console.log('Server is running'))
