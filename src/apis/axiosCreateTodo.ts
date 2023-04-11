import axios from "axios";
import apiConsts, { URL } from "../helper/apiConsts";

const axiosCreateTodo = async ({ todo }: { todo: string }) => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await axios.post(
      `${URL}${apiConsts.CREATE_TODO}`,
      { todo: todo },
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

export default axiosCreateTodo;
