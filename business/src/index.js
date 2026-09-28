import express from "express";
import todoRouter from "./routes/todo.routes.js";

const app = express();
const PORT = 8080;


app.use("/api/v1/todos", todoRouter);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);  
})