import { Todo } from "../../../apis/axiosSelectTodos";
import useTodoCard from "../../../hooks/todoList/useTodoCard";

const EditTodoCard = ({
  isChecked,
  isModified,
  doChangeTodoCheckedState,
  data,
  getTodoList,
  changeModifiedState,
  doUpdateTodo,
  updatedTodoValue,
  changeUpdatedTodoValue,
}: {
  isChecked: boolean;
  isModified: boolean;
  doChangeTodoCheckedState: (checkedState: boolean) => void;
  data: Todo;
  getTodoList: () => Promise<void>;
  changeModifiedState: (state: boolean) => void;
  doUpdateTodo: ({
    id,
    todo,
    isCompleted,
  }: {
    id: number;
    todo: string;
    isCompleted: boolean;
  }) => void;
  updatedTodoValue: string;
  changeUpdatedTodoValue: (value: string) => void;
}) => {
  return (
    <li className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-auto flex justify-between">
      <div className="flex basis-5/6">
        <label>
          <input
            type="checkbox"
            className="mr-3"
            checked={isChecked}
            onChange={() => doChangeTodoCheckedState(!isChecked)}
          />
        </label>
        <label>
          <input
            type="text"
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            value={updatedTodoValue}
            onChange={(e) => changeUpdatedTodoValue(e.target.value)}
          />
        </label>
      </div>
      <div className="flex flex-col gap-2 basis-1/6">
        <button
          type="button"
          className="flex-none rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          onClick={() => {
            doUpdateTodo({
              id: data?.id,
              todo: updatedTodoValue,
              isCompleted: isChecked,
            });
            getTodoList();
            changeModifiedState(!isModified);
          }}
          data-testid="modify-button"
        >
          제출
        </button>
        <button
          type="button"
          className="flex-none rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
          onClick={() => {
            changeUpdatedTodoValue(data?.todo);
            changeModifiedState(!isModified);
          }}
          data-testid="delete-button"
        >
          취소
        </button>
      </div>
    </li>
  );
};

export default EditTodoCard;
