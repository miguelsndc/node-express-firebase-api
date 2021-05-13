const express = require('express')
const cors = require('cors')
const postsRoute = require('./routes/Posts')
const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/posts', postsRoute)

app.get('/', (req, res) => {
  res.json({ message: 'working' })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
