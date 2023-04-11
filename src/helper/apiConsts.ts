const URL = "https://www.pre-onboarding-selection-task.shop";

const apiConsts = {
  SIGNUP: "/auth/signup",
  LOGIN: "/auth/signin",
  CREATE_TODO: "/todos",
  GET_TODOS: "/todos",
  UPDATE_TODO: (id: number) => `/todos/${id}`,
  DELETE_TODO: (id: number) => `/todos/${id}`,
};

export default apiConsts;
export { URL };
