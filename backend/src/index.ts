require('dotenv').config()
import express from 'express'
import { query } from './database'

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send(`Hello There`)
})

app.get('/clients', async (req, res) => {
  const result = await query("select * from client")
  res.send(result.rows)
})

app.post('/report', async (req, res) => {
  const { name, data } = req.body
  const result = await query("insert into client values ($1, $2)", [name, data])
  res.send("added to db")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})