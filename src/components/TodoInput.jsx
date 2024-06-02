import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addTodo({ text: input, completed: false });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-4">
      <label>Add todo</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-700 p-2 w-full rounded-lg bg-transparent"
      />
      <button
        type="submit"
        className="bg-blue-300 text-black capitalize font-semibold p-2 rounded-lg px-4 py-2"
      >
        ADD TASK
      </button>
    </form>
  );
};

export default TodoInput;
