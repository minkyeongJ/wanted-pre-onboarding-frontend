import axios from "axios";
import apiConsts, { URL } from "../helper/apiConsts";

const axiosLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `${URL}${apiConsts.LOGIN}`,
      { email: email, password: password },
      { headers: { "Content-Type": "application/json" } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default axiosLogin;
