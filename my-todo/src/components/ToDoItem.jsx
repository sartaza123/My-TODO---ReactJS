function ToDoItem() {
  return (
    <div className="flex justify-between my-3 py-1 px-4 items-center border-b border-white/70">
      <h3 className=" w-lg px-4 h-12 text-white flex items-center border-b border-white/40 ">
        work
      </h3>
      <button className=" rounded-xl  backdrop-blur-xl border border-white/40 shadow-xl px-4 h-12 text-white cursor-pointer">
        Edit
      </button>
      <button className=" rounded-xl  backdrop-blur-xl border border-white/40 shadow-xl px-4 h-12 text-white cursor-pointer">
        Compelete
      </button>
      <button className=" rounded-xl  backdrop-blur-xl border border-white/40 shadow-xl px-4 h-12 text-white cursor-pointer">
        Delete
      </button>
    </div>
  );
}
export default ToDoItem;
