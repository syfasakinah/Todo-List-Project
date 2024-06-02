import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {id: 1, text:"Create Guest Experience Mobile Check-in", completed: false}, 
    {id: 2, text:"Document current CI/CD process", completed: false}, 
    {id: 3, text:"Perform Code Review for Final Pillow-Talk release", completed: false}, 
    {id: 4, text:"Implement new Color Palette from Design Team", completed: false}, 
    {id: 5, text:"Fix image uploading process for guest check-in", completed: false}, 
    {id: 6, text:"Profile on-boarding documentatio", completed: false}, 
  ])
  // const [todos, setTodos] = useState([
  //   "Create Guest Experience Mobile Check-in",
  //   "Document current CI/CD process",
  //   "Perform Code Review for Final Pillow-Talk release",
  //   "Implement new Color Palette from Design Team",
  //   "Fix image uploading process for guest check-in",
  //   "Profile on-boarding documentation"
  // ]);

  const [completedCount, setCompletedCount] = useState(0);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const removeTodo = (index) => {
    const getTodos = [...todos]
    const newTodos = todos.filter((_, i) => i !== index);
    if(!getTodos[index].completed){
      setTodos(newTodos);
    }else {
      setCompletedCount(completedCount - 1)
      setTodos(newTodos)
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
    setTodos(newTodos);
    setCompletedCount(newTodos.filter(todo => todo.completed).length);
  };

  console.log(todos)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-grey p-6 rounded shadow-lg w-1/2">
        <h1 className="text-2xl text-center font-bold mb-4">Chores To-Do List</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <hr className='absolute left-0 w-[100vw] border-gray-700' />
        <p className="text-xl mt-10 mb-10 flex justify-center">Done: {completedCount}</p>
        <TodoInput addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
