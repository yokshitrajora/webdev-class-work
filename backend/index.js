const express = require('express');
// import express from 'express';
const app = express()
const port = 8080


//routes
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/animes', (req, res) => {
  const animes = [
    {
      id: 1,
      title: "Shadow Eclipse",
      genre: ["Action", "Fantasy"],
      episodes: 24,
      rating: 8.7,
      status: "Completed"
    },
    {
      id: 2,
      title: "Neon Samurai",
      genre: ["Sci-Fi", "Adventure"],
      episodes: 12,
      rating: 8.2,
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Moonlit Academy",
      genre: ["Romance", "School"],
      episodes: 13,
      rating: 7.9,
      status: "Completed"
    },
    {
      id: 4,
      title: "Dragon's Legacy",
      genre: ["Action", "Adventure", "Fantasy"],
      episodes: 36,
      rating: 9.1,
      status: "Ongoing"
    },
    {
      id: 5,
      title: "Cyber Hearts",
      genre: ["Romance", "Sci-Fi"],
      episodes: 10,
      rating: 8.4,
      status: "Completed"
    }
  ];
  res.send(animes);
})


// app.get("routes", "routeHandler")

// google.com/
// google.com/navyum
// google.com/navyum/settings


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})