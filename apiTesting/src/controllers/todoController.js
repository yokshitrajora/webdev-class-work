let todos = [
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
  
  // GET all todos
  const getTodos = (req, res) => {
    res.json(todos);
  };
  
  // GET single todo
  const getTodoById = (req, res) => {
try {
      const id = Number(req.params.id);
    
      const todo = todos.find((todo) => todo.id === id);
    
      if (!todo) {
        return res.status(404).json({
          message: "Todo not found",
        });
      }
    
      res.json(todo);
} catch (error) {
  
}
  };
  
  // POST create todo
  const createTodo = (req, res) => {
    const { title } = req.body;
  
    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }
  
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };
  
    todos.push(newTodo);
  
    res.status(201).json({
      message: "Todo created successfully",
      todo: newTodo,
    });
  };
  
  // PUT update todo
  const updateTodo = (req, res) => {
    const id = Number(req.params.id);
  
    const todo = todos.find((todo) => todo.id === id);
  
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
  
    const { title, completed } = req.body;
  
    if (title !== undefined) {
      todo.title = title;
    }
  
    if (completed !== undefined) {
      todo.completed = completed;
    }
  
    res.json({
      message: "Todo updated successfully",
      todo: todo,
    });
  };
  
  // DELETE todo
  const deleteTodo = (req, res) => {
    const id = Number(req.params.id);
  
    const todoIndex = todos.findIndex((todo) => todo.id === id);
  
    if (todoIndex === -1) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
  
    const deletedTodo = todos.splice(todoIndex, 1);
  
    res.json({
      message: "Todo deleted successfully",
      todo: deletedTodo[0],
    });
  };
  
  module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };