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
      p-14 min-h-screen"
    >
      {/* header omported from header Component ============= */}
      <Header />

      {/* Todo Msin container ========== */}
      <div
        className="
        max-w-4xl w-full
        rounded-2xl bg-white/20
        backdrop-blur-lg
        border border-white/30
        shadow-xl p-10
        flex flex-col 
        max-h-[520px]"
      >
        {/* To-Do Input Area Container ============= */}
        <div
          className="
          flex justify-between
          my-4 p-4 rounded-2xl
          backdrop-blur-lg
          border border-white/30
          shadow-xl"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter What Todo"
            className="
            h-12 px-4 w-[630px]
            rounded-xl border
            border-white/40
            text-white
            placeholder-white/70 
            focus:outline-none
            focus:ring-2
            focus:ring-purple-500/50 "
          />

          <button
            className="
            rounded-xl backdrop-blur-xl
            border-2 px-4 h-12
            border-white/40 shadow-xl
            text-white cursor-pointer
            hover:bg-purple-500/20
            hover:border-purple-500/70
            hover:text-purple-500/70"
            onClick={handleAddTodo}
          >
            ADD TO-DO
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
