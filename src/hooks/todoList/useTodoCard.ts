import { useCallback, useState } from "react";
import { Todo } from "../../apis/axiosSelectTodos";
import axiosUpdateTodo from "../../apis/axiosUpdateTodo";
import axiosDeleteTodo from "../../apis/axiosDeleteTodo";

interface TodoCard {
  isChecked: boolean;
  doChangeTodoCheckedState: (checkedState: boolean) => void;
  doDeleteTodo: (id: number, getTodoList: () => Promise<void>) => void;
  isModified: boolean;
  changeModifiedState: (state: boolean) => void;
  doUpdateTodo: ({
    id,
    todo,
    isCompleted,
    getTodoList,
  }: {
    id: number;
    todo: string;
    isCompleted: boolean;
    getTodoList: () => Promise<void>;
  }) => void;
  updatedTodoValue: string;
  changeUpdatedTodoValue: (value: string) => void;
}

const useTodoCard = ({ data }: { data: Todo }): TodoCard => {
  const [isChecked, setIsChecked] = useState(data?.isCompleted);
  const [isModified, setIsModified] = useState(false);
  const [updatedTodoValue, setUpdatedTodoValue] = useState(data?.todo);

  const changeCheckedTodoState = useCallback(
    async (data: Todo, isTodoChecked: boolean) => {
      return await axiosUpdateTodo({
        id: data?.id,
        todo: data?.todo,
        isCompleted: isTodoChecked,
      });
    },
    []
  );

  const changeModifiedState = useCallback((state: boolean) => {
    setIsModified(state);
  }, []);

  const changeUpdatedTodoValue = (value: string) => {
    setUpdatedTodoValue(value);
  };

  const deleteTodo = async (id: number, getTodoList: () => Promise<void>) => {
    return await axiosDeleteTodo({
      id: id,
    }).then(getTodoList);
  };

  const updateTodo = async ({
    id,
    todo,
    isCompleted,
    getTodoList,
  }: {
    id: number;
    todo: string;
    isCompleted: boolean;
    getTodoList: () => Promise<void>;
  }) => {
    return await axiosUpdateTodo({
      id: id,
      todo: todo,
      isCompleted: isCompleted,
    }).then(getTodoList);
  };

  const doChangeTodoCheckedState = (checkedState: boolean) => {
    setIsChecked(checkedState);
    changeCheckedTodoState(data, checkedState);
  };

  const doDeleteTodo = (id: number, getTodoList: () => Promise<void>) => {
    deleteTodo(id, getTodoList);
  };

  const doUpdateTodo = ({
    id,
    todo,
    isCompleted,
    getTodoList,
  }: {
    id: number;
    todo: string;
    isCompleted: boolean;
    getTodoList: () => Promise<void>;
  }) => {
    updateTodo({ id, todo, isCompleted, getTodoList });
  };
  return {
    isChecked,
    doChangeTodoCheckedState,
    doDeleteTodo,
    isModified,
    changeModifiedState,
    doUpdateTodo,
    updatedTodoValue,
    changeUpdatedTodoValue,
  };
};

export default useTodoCard;
