import axios from "axios";
import apiConsts, { URL } from "../helper/apiConsts";

const axiosUpdateTodo = async ({
  id,
  todo,
  isComplete,
}: {
  id: string;
  todo: string;
  isComplete: boolean;
}) => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await axios.put(
      `${URL}${apiConsts.UPDATE_TODO}`,
      { todo: todo, isComplete: isComplete },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default axiosUpdateTodo;
