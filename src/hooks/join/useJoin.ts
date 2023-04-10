import { useCallback } from "react";
import axiosJoin from "../../apis/axiosJoin";
import { useNavigate } from "react-router";
import routerConst from "../../helper/routerConst";

interface Join {
  doJoin: ({ email, password }: { email: string; password: string }) => void;
}

const useJoin = (): Join => {
  const navigation = useNavigate();
  const doJoin = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      return await axiosJoin({ email, password }).then((res) => {
        if (res?.status === 201) {
          navigation(routerConst.LOGIN);
        }
      });
    },
    []
  );
  return { doJoin };
};

export default useJoin;
