import { useState } from "react";
import Header from "./Header";
import ToDoItem from "./ToDoItem";
import "./style.css";

function ToDoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  // Add & Edit Todo Function with id ===============

  function handleAddTodo() {
    if (!input.trim()) return;

    // IF editing
    if (edit !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === edit
            ? { ...todo, text: input } // update text
            : todo,
        ),
      );

      setEdit(null); // exit edit mode
    }
    // ELSE adding new todo
    else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input,
        },
      ]);
    }

    setInput(""); // clear input always
  }
  function handleEdit(id, text) {
    setInput(text); // put text into input
    setEdit(id); // remember which todo to edit
  }

  // handle delete function
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    // main area for background image ==============
    <div
      className="
      ToDoList
      flex justify-center
      flex-col gap-4 items-center
      sm:p-0 md:p-10 lg:p-14
      min-h-screen"
    >
      {/* header omported from header Component ============= */}
      <Header />

      {/* Todo Main container ========== */}
      <div
        className="
        max-w-4xl w-full
        sm:rounded-0 md:rounded-lg lg:rounded-2xl
        bg-white/20
        backdrop-blur-lg
        border border-white/30
        shadow-xl sm:p-4 md:p-6 lg:p-10
        flex flex-col 
        max-h-[520px]"
      >
        {/* To-Do Input Area Container ============= */}
        <div
          className="
          flex justify-between my-4 p-4 
          sm:rounded-0 md:rounded-lg lg:rounded-2xl
          backdrop-blur-lg shadow-xl
          border border-white/30 "
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter What Todo"
            className="
            text-white 
            px-4 min-w-0 flex-1
            focus:ring-2 mr-4
            focus:outline-none
            sm:h-8 md:h-10 lg:h-12
            placeholder-white/70 
            border border-white/40
            sm:text-sm md:text-md lg:text-lg
            sm:rounded-0 md:rounded-lg lg:rounded-xl
            focus:ring-yellow-900/50 "
          />

          <button
            className="
            sm:text-sm md:text-md lg:text-lg
            sm:rounded-0 md:rounded-lg lg:rounded-xl
            backdrop-blur-xl border-2
            px-3 sm:w-16 md:w-24 lg:w-32
            sm:h-8 md:h-10 lg:h-12
            border-white/40 shadow-xl
            text-white cursor-pointer
            hover:bg-yellow-900/20
            hover:border-yellow-900/70
            hover:text-yellow-900/70"
            onClick={handleAddTodo}
          >
            ADD
          </button>
        </div>

        {/* Added lists ============= */}
        <div
          className="
        flex flex-col px-1
        overflow-y-auto
        
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:backdrop-blur-lg
        [&::-webkit-scrollbar-thumb]:bg-white/40
        [&::-webkit-scrollbar-thumb:hover]:bg-white/60

        scrollbar-thin
        scrollbar-thumb-white/40
        scrollbar-track-transparent"
        >
          <div className="lists">
            {todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                data={todo.text}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
