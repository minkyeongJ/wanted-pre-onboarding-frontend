import { useCallback, useState } from "react";
import { Todo } from "../../apis/axiosSelectTodos";
import axiosUpdateTodo from "../../apis/axiosUpdateTodo";

interface TodoCard {
  isChecked: boolean;
  doChangeTodoCheckedState: (checkedState: boolean) => void;
}

const useTodoCard = ({ data }: { data: Todo }): TodoCard => {
  const [isChecked, setIsChecked] = useState(data?.isCompleted);

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

  const doChangeTodoCheckedState = (checkedState: boolean) => {
    setIsChecked(checkedState);
    console.log(checkedState);
    changeCheckedTodoState(data, checkedState);
  };

  return { isChecked, doChangeTodoCheckedState };
};

export default useTodoCard;
