import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todo";

const Todos = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  const [searchParams] = useSearchParams();

  let filteredTodos = todos;

  if (searchParams.get("todos") === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  }

  if (searchParams.get("todos") === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <main>
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="border px-2 py-2 rounded flex items-center justify-between mb-2"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <label
              className={`text-sm text-gray-600 ${
                todo.completed ? "line-through" : ""
              }`}
              htmlFor={`todo-${todo.id}`}
            >
              {todo.task}
            </label>
          </div>
          {todo.completed && (
            <div className="">
              <button
                className="rounded text-xs font-semibold uppercase py-1 bg-red-500 px-2  text-red-50 hover:bg-red-700 transition-all delay-75"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default Todos;
