// const express = require('express');
import express from "express";
const app = express(); // server creating part
const port = 8000;

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
  },
];

// get all users
app.get("/users", (req, res) => {
  res.send(users);
});

// get one particular user
app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
});

// create user
app.post("/user", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.json({
      message: "Title is required",
    });
  }

  const newUser = {
    id: users.length + 1,
    title: title,
    completed: false,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

// update user
app.put("/user/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.json({
      message: "User not found",
    });
  }

  const { title, completed } = req.body;

  if (title !== undefined) {
    user.title = title;
  }

  if (completed !== undefined) {
    user.completed = completed;
  }

  res.status(200).json({
    message: "User updated successfully",
    user: user,
  });
});

// DELETE user
app.delete("/user/:id" (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }
,
  const deletedUser = users.splice(userIndex, 1);

  res.status(200).json({
    message: "User deleted successfully",
    user: deletedUser[0],
  });
}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); // start server
