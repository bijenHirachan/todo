import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="px-16 py-8 container mx-auto">
      <h2 className="text-xl text-blue-600 text-right tracking-wide font-semibold leading-7 mb-4">
        Todo App
      </h2>

      <Navbar />
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
