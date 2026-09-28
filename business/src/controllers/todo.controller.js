import todo from "../models/todo.model.js";

const createTodo = (req, res) => {
    const newTodo = {
        id: todo.length + 1,
        title: req.body.title
    }

    todo.push(newTodo);

    res.status(201).json({
        message: "todo create succefully",
        data : newTodo
    })
}

const getTodo = (req, res) => {
    res.send("hello server")
}

const updateTodo = (req, res) => {}

const deleteTodo = (req, res) => {}


export { 
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
}