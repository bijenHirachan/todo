import { FormEvent, useState } from "react";
import { useTodos } from "../store/todo";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodos();

  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(todo);

    setTodo("");
  };

  return (
    <form onSubmit={addTodoHandler} className="my-6 flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border rounded-l outline-none px-1 ring-0 w-full sm:w-4/5 xl:w-2/5"
        placeholder="Task..."
      />
      <button
        className="bg-blue-500 px-2 py-1 text-white font-semibold uppercase rounded-r"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
