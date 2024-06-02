import {Trash2} from "lucide-react"


const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className="my-6">
      <div className="flex justify-between gap-x-8 w-full items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          className={`bg-transparent border border-green-200 rounded-sm px-2 w-[18px] h-4 ${todo.completed? '':'appearance-none'}`}
          // className="bg-transparent border border-green-200 rounded-sm w-4 h-4 checked:bg-green-200 checked:border-0"
        />
        {/* <Check /> */}
        <span
          className={`cursor-pointer w-full p-0 ${todo.completed ? 'line-through' : ''}`}
          onClick={toggleTodo}
        >
          {todo.text}
        </span>
        <div className="border border-red-300 bg-transparent rounded-lg items-center">
      <button
        onClick={removeTodo}
        className="p-2"
      >
        <Trash2 size={14} color="pink" />
        {/* <img src="https://img.icons8.com/?size=100&id=O7BBik3rMCvX&format=png&color=000000" alt="delete" className="w-10 h-10"/> */}
      </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
