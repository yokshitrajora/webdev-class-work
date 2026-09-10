const express = require("express");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});