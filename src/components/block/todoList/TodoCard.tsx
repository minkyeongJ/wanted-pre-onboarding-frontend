import { Todo } from "../../../apis/axiosSelectTodos";
import useTodoCard from "../../../hooks/todoList/useTodoCard";
import EditTodoCard from "./EditTodoCard";
import ShowTodoCard from "./ShowTodoCard";

const TodoCard = ({
  data,
  getTodoList,
}: {
  data: Todo;
  getTodoList: () => Promise<void>;
}) => {
  const {
    isModified,
    changeModifiedState,
    isChecked,
    doChangeTodoCheckedState,
    doDeleteTodo,
    doUpdateTodo,
    updatedTodoValue,
    changeUpdatedTodoValue,
  } = useTodoCard({
    data,
  });

  return (
    <>
      {isModified ? (
        <EditTodoCard
          isChecked={isChecked}
          isModified={isModified}
          doChangeTodoCheckedState={doChangeTodoCheckedState}
          data={data}
          getTodoList={getTodoList}
          changeModifiedState={changeModifiedState}
          doUpdateTodo={doUpdateTodo}
          updatedTodoValue={updatedTodoValue}
          changeUpdatedTodoValue={changeUpdatedTodoValue}
        />
      ) : (
        <ShowTodoCard
          isChecked={isChecked}
          isModified={isModified}
          doChangeTodoCheckedState={doChangeTodoCheckedState}
          doDeleteTodo={doDeleteTodo}
          data={data}
          getTodoList={getTodoList}
          changeModifiedState={changeModifiedState}
        />
      )}
    </>
  );
};

export default TodoCard;
