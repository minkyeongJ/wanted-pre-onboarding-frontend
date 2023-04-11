import axios from "axios";
import apiConsts, { URL } from "../helper/apiConsts";

type Todo = {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId: number;
};

const axiosSelectTodos = async () => {
  const accessToken = localStorage.getItem("access_token");

  try {
    const response = await axios.get(`${URL}${apiConsts.CREATE_TODO}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default axiosSelectTodos;
export type { Todo };
