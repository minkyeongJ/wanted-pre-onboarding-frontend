import { useCallback, useEffect, useState } from "react";
import axiosCreateTodo from "../../apis/axiosCreateTodo";
import axiosSelectTodos, { Todo } from "../../apis/axiosSelectTodos";

interface TodoList {
  doTodoSubmit: (value: string) => void;
  todoValue: string;
  setTodoValue: React.Dispatch<React.SetStateAction<string>>;
  todoList: Todo[];
  debounces: (
    fn: React.Dispatch<React.SetStateAction<string>>,
    delay?: number
  ) => void;
}

const useTodoList = (): TodoList => {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  console.log(todoList);

  const debounces = (
    fn: React.Dispatch<React.SetStateAction<string>>,
    delay = 500
  ) => {
    return () => setInterval(() => fn, delay);
  };

  const getTodoList = useCallback(async () => {
    return await axiosSelectTodos().then((res) => {
      if (res?.status === 200) {
        setTodoList(res.data);
      }
    });
  }, []);

  //첫 리스트
  useEffect(() => {
    getTodoList();
  }, []);

  const createTodo = useCallback(
    async (value: string) => {
      return await axiosCreateTodo({ todo: value }).then((res) => {
        if (res?.status === 201) {
          getTodoList();
          console.log("확인");
        }
      });
    },
    [getTodoList]
  );

  const doTodoSubmit = (value: string) => {
    createTodo(value);
    setTodoValue("");
  };

  return { doTodoSubmit, todoValue, setTodoValue, todoList, debounces };
};

export default useTodoList;