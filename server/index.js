// const express = require('express');
import express from "express";
const app = express() // server creating part
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // start server