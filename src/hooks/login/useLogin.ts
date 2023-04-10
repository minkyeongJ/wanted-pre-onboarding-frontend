import { useCallback } from "react";
import { useNavigate } from "react-router";
import axiosLogin from "../../apis/axiosLogin";
import routerConst from "../../helper/routerConst";
import { ACCESS_TOKEN } from "../../helper/etcConsts";

interface Login {
  doLogin: ({ email, password }: { email: string; password: string }) => void;
}

const useLogin = (): Login => {
  const navigation = useNavigate();
  const doLogin = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      return await axiosLogin({ email, password }).then((res) => {
        if (res?.status === 200) {
          localStorage.setItem(ACCESS_TOKEN, res?.data?.access_token);
          navigation(routerConst.TODO);
        }
      });
    },
    [navigation]
  );
  return { doLogin };
};

export default useLogin;
