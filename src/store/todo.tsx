import { ReactNode, createContext, useContext, useState } from "react";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

type TodoContextProps = {
  todos: Todo[];
  addTodo: (task: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextProps | null>(null);

export type TodoContextProviderProps = {
  children: ReactNode;
};

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      let todos = JSON.parse(localStorage.getItem("todos")!) || [];

      return todos;
    } catch (error) {
      return [];
    }
  });

  const addTodo = (task: string) => {
    setTodos((prev) => {
      let newTodos = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
        },
        ...prev,
      ];

      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos;
    });
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos;
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((todo) => todo.id !== id);

      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos;
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const todoConsumer = useContext(TodoContext);
  if (!todoConsumer) {
    throw new Error("Used out of provider!");
  }
  return todoConsumer;
};
