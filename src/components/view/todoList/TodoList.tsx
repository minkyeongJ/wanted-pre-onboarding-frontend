import useTodoList from "../../../hooks/todoList/useTodoList";
import TodoCard from "../../block/todoList/TodoCard";

const TodoList = () => {
  const { doTodoSubmit, todoValue, setTodoValue, todoList } = useTodoList();

  return (
    <main>
      <section id="todo-input-section">
        <div className="relative isolate overflow-hidden py-16">
          <div>
            <div className="mt-6 flex max-w-md gap-x-4 my-0 mx-auto">
              <label htmlFor="todo-input" className="sr-only">
                할 일 적기
              </label>
              <input
                id="todo-input"
                type="text"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-1 bg-indigo-300/5 px-3.5 py-2 text-purple-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="오늘 할 일"
                data-testid="new-todo-input"
                value={todoValue}
                onChange={(e) => {
                  setTodoValue(e.target.value);
                }}
              />
              <button
                type="button"
                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => doTodoSubmit(todoValue)}
                data-testid="new-todo-add-button"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="todo-list-section">
        <ul>
          {todoList.map((data) => (
            <TodoCard data={data} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default TodoList;
