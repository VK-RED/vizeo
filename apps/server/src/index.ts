import express from "express";
import { ffmpeg } from "ffmpeg";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  try {
    ffmpeg();
  } catch (error) {
    console.log(error);
  }
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})