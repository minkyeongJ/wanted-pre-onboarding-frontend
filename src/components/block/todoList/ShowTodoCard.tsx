import { Todo } from "../../../apis/axiosSelectTodos";

const ShowTodoCard = ({
  isChecked,
  isModified,
  doChangeTodoCheckedState,
  doDeleteTodo,
  data,
  getTodoList,
  changeModifiedState,
}: {
  isChecked: boolean;
  isModified: boolean;
  doChangeTodoCheckedState: (checkedState: boolean) => void;
  doDeleteTodo: (id: number, getTodoList: () => Promise<void>) => void;
  data: Todo;
  getTodoList: () => Promise<void>;
  changeModifiedState: (state: boolean) => void;
}) => {
  return (
    <li className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-auto flex justify-between">
      <label className="flex basis-5/6">
        <input
          type="checkbox"
          className="mr-3"
          checked={isChecked}
          onChange={() => doChangeTodoCheckedState(!isChecked)}
        />
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data?.todo}
        </span>
      </label>
      <div className="flex flex-col gap-2 basis-1/6">
        <button
          type="button"
          className="flex-none rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          onClick={() => changeModifiedState(!isModified)}
          data-testid="modify-button"
        >
          수정
        </button>
        <button
          type="button"
          className="flex-none rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
          onClick={() => {
            doDeleteTodo(data?.id, getTodoList);
          }}
          data-testid="delete-button"
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default ShowTodoCard;
