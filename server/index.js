// const express = require('express');
import express from "express";
const app = express() // server creating part
const port = 3000

let users = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
  },
  {
    id: 2,
    title: "Practice Postman",
    completed: true,
  }
];

// get all users
app.get("/users", (req, res)=>{
  res.send(todos)
})

// get one particular user
app.get("/users/:id", (req, res)=>{
  const id =  Number(req.params.id);

  const user = users.find((user) => user.id === id );

  if(!user){
    return res.status(404).json({
      message: "User not found"
    })
  }

  res.json(user)
})


// create user
app.post("/users", (req, res)=>{})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // start server