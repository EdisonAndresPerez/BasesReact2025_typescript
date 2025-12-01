import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  todoCompleted: number;
  todoPending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  todoCompleted: z.number(),
  todoPending: z.number(),
});

export const getTaskInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state");

  if (!localStorageState) {
    return {
      todos: [],
      todoCompleted: 0,
      todoPending: 0,
      length: 0,
    };
  }

  //validar mediante Zod
  const result = TaskStateScheme.safeParse(localStorageState);
  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      todoCompleted: 0,
      todoPending: 0,
      length: 0,
    };
  }

  // ! cuidado, puede que el objeto haya sido manipulado
  return result.data;
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        length: state.todos.length + 1,
        todoPending: state.todoPending + 1,
        todos: [...state.todos, newTodo],
      };
    }

    case "TOGGLE_TODO": {
      const updatedTodo = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodo,
        todoCompleted: updatedTodo.filter((todo) => todo.completed).length,
        todoPending: updatedTodo.filter((todo) => !todo.completed).length,
      };
    }

    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        todoCompleted: currentTodos.filter((todo) => todo.completed).length,
        todoPending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }
    default:
      return state;
  }
};
