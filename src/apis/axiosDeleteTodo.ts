import axios from "axios";
import apiConsts, { URL } from "../helper/apiConsts";

const axiosDeleteTodo = async ({ id }: { id: number }) => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await axios.delete(`${URL}${apiConsts.DELETE_TODO(id)}`, {
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

export default axiosDeleteTodo;
