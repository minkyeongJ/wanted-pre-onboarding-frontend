import { useCallback, useState } from "react";
import { Todo } from "../../apis/axiosSelectTodos";
import axiosUpdateTodo from "../../apis/axiosUpdateTodo";
import axiosDeleteTodo from "../../apis/axiosDeleteTodo";

interface TodoCard {
  isChecked: boolean;
  doChangeTodoCheckedState: (checkedState: boolean) => void;
  doDeleteTodo: (id: number) => void;
  isModified: boolean;
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>;
}

const useTodoCard = ({ data }: { data: Todo }): TodoCard => {
  const [isChecked, setIsChecked] = useState(data?.isCompleted);
  const [isModified, setIsModified] = useState(false);

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

  const deleteTodo = useCallback(async (id: number) => {
    return await axiosDeleteTodo({
      id: id,
    });
  }, []);

  const doChangeTodoCheckedState = (checkedState: boolean) => {
    setIsChecked(checkedState);
    changeCheckedTodoState(data, checkedState);
  };

  const doDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return {
    isChecked,
    doChangeTodoCheckedState,
    doDeleteTodo,
    isModified,
    setIsModified,
  };
};

export default useTodoCard;
