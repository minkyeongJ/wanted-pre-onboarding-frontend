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
  const { isModified, isChecked, doChangeTodoCheckedState, doDeleteTodo } =
    useTodoCard({
      data,
    });

  return (
    <>
      {isModified ? (
        <EditTodoCard data={data} getTodoList={getTodoList} />
      ) : (
        <ShowTodoCard
          isChecked={isChecked}
          doChangeTodoCheckedState={doChangeTodoCheckedState}
          doDeleteTodo={doDeleteTodo}
          data={data}
          getTodoList={getTodoList}
        />
      )}
    </>
  );
};

export default TodoCard;
