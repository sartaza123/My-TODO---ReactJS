import { useState } from "react";

function ToDoItem({ id, data, onDelete, onEdit }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex justify-between my-3 py-1 px-4 items-center border-b border-white/70">
      {/* Checbox */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
        className=" scale-[1.3] accent-purple-600 cursor-pointer my-4"
      />

      {/* Todo Item */}
      <h3
        className={`w-[600px] px-4 h-12 text-white flex items-center border-b border-white/40  ${completed ? "line-through decoration-white opacity-80" : ""} `}
      >
        {data}
      </h3>

      {/* edit button */}
      <button
        onClick={() => onEdit(id, data)}
        className=" rounded-xl 
        backdrop-blur-xl
        border border-white/40
        shadow-xl px-4 h-12
       text-white
        cursor-pointer"
      >
        Edit
      </button>

      {/* delete button */}
      <button
        onClick={() => onDelete(id)}
        className=" rounded-xl 
        backdrop-blur-xl
        border border-white/40
        shadow-xl px-4 h-12
        text-white
        cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}
export default ToDoItem;
