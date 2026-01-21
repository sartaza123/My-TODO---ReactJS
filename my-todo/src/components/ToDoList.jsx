import ToDoItem from "./ToDoItem";
import "./style.css";

function ToDoList() {
  return (
    <div className="ToDoList flex justify-center p-14 min-h-screen">
      <div className=" max-w-4xl w-full rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl p-10 flex flex-col ">
        <div className="flex justify-between my-4 p-4 rounded-2xl backdrop-blur-lg border border-white/30 shadow-xl">
          <input
            type="text"
            placeholder="Enter todo"
            className=" h-12 px-4 w-157.5 rounded-xl border border-white/40 text-white placeholder-white/70  focus:outline-none focus:ring-2 focus:ring-white/50 "
          />
          <button className=" rounded-xl  backdrop-blur-xl border border-white/40 shadow-xl px-4 h-12 text-white cursor-pointer">
            ADD TO-DO
          </button>
        </div>
        <div className="flex flex-col overflow-y-auto hide-scrollbar">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
