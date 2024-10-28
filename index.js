import express from 'express';
import 'dotenv/config';
import post from './routes/post.js'

const app = express()
const port = process.env.PORT || 5000;

app.use('/post', post);

app.get('/', (req, res) => {
  res.send('Backend')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})