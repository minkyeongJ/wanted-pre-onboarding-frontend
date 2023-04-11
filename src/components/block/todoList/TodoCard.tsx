import { useState } from "react";
import { Todo } from "../../../apis/axiosSelectTodos";

const TodoCard = ({ data }: { data: Todo }) => {
  console.log(data);
  const [isChecked, setIsChecked] = useState(data?.isCompleted);

  return (
    <li
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-auto"
      id={`${data?.id}`}
    >
      <label>
        <input
          type="checkbox"
          className="mr-3"
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data?.todo}
        </span>
      </label>
    </li>
  );
};

export default TodoCard;
