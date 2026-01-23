import { useState } from "react";

function ToDoItem({ id, data, onDelete, onEdit }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div
      className="
      flex items-center
      gap my-3 py-1 px-4
      border-b border-white/70"
    >
      {/* Checbox for completed work*/}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
        className="
        scale-[1.3] mr-3
        accent-yellow-900
        cursor-pointer my-4"
      />

      {/* Todo Item */}
      <h3
        className={`
          flex-1 min-w-0 whitespace-normal
          px-4 wrap-break-word
          text-white
          border-b border-white/40 
          ${completed ? "line-through decoration-white opacity-80" : ""} `}
      >
        {data}
      </h3>

      {/* edit button */}
      <button
        onClick={() => onEdit(id, data)}
        className="
        sm:rounded-0 md:rounded-lg lg:rounded-xl
        px-3 sm:w-16 md:w-20 lg:w-24
        backdrop-blur-xl m-3
        cursor-pointer
        border border-white/40
        sm:h-8 md:h-10 lg:h-12
        text-white shadow-xl
        hover:bg-green-400/10
        hover:text-green-400
        hover:border-green-400/70"
      >
        Edit
      </button>

      {/* delete button */}
      <button
        onClick={() => onDelete(id)}
        className="
        backdrop-blur-xl border border-white/40
        sm:rounded-0 md:rounded-lg lg:rounded-xl
        shadow-xl px-3 sm:w-16 md:w-20 lg:w-24
        sm:h-8 md:h-10 lg:h-12
        text-white cursor-pointer
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
