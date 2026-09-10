// const express = require('express');
import express from "express"
const app = express()  // server creating point
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello class!')
})

app.listen(port, () => {   // server starting point
  console.log(`Example app listening on port ${port}`)
})