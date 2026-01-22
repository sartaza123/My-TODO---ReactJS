import { useState } from "react";

function ToDoItem({ id, data, onDelete, onEdit }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div
      className="
      flex justify-between
      items-center
      my-3 py-1 px-4
      border-b border-white/70"
    >
      {/* Checbox for completed work*/}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
        className=" scale-[1.3] accent-yellow-900 cursor-pointer my-4"
      />

      {/* Todo Item */}
      <h3
        className={`
          w-[600px] px-4 h-12
          text-white
          flex items-center
          border-b border-white/40 
          ${completed ? "line-through decoration-white opacity-80" : ""} `}
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
        hover:bg-green-400/10
        hover:text-green-400
        hover:border-green-400/70"
        cursor-pointer
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
        cursor-pointer
        hover:bg-red-500/20
        hover:text-red-500
        hover:border-red-500/70"
      >
        Delete
      </button>
    </div>
  );
}
export default ToDoItem;
