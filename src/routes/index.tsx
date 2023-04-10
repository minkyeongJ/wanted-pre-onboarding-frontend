import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Layout from "../Layout";
import HomePage from "../pages/home";
import TodoListPage from "../pages/todo-list";
import LoginPage from "../pages/login";
import routerConst from "../helper/routerConst";
import JoinPage from "../pages/join";
// import AdminMainPage from "../pages/layout/admin";
// import ProtectRoute from "./ProtectRoute";
// import MemberManageMainPage from "../pages/layout/admin/member";

// Error 페이지 정의
// import Error404 from "pages/common/error/Error404";

// Layout 페이지 정의
// import DefaultLayout from "layouts";
// import AdminDefaultLayout from "layouts/AdminDefaultLayout";
// import FilePage from "pages/files/FilePage";
// import LayoutPage from "pages/layout/LayoutPage";
// import WEditor from "pages/editor/WEditor";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 인증 여부 상관 없이 접속 가능한 페이지 정의 */}
        <Route
          index
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* 인증을 반드시 하지 않아야만 접속 가능한 페이지 정의 */}
        <Route element={<PrivateRoute authentication={false} />}>
          <Route
            path={routerConst.LOGIN}
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />
        </Route>
        {/* 인증을 반드시 하지 않아야만 접속 가능한 페이지 정의 */}
        <Route element={<PrivateRoute authentication={false} />}>
          <Route
            path={routerConst.SIGNUP}
            element={
              <Layout>
                <JoinPage />
              </Layout>
            }
          />
        </Route>

        {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
        <Route element={<PrivateRoute authentication={true} />}>
          <Route
            path={routerConst.TODO}
            element={
              <Layout>
                <TodoListPage />
              </Layout>
            }
          />
        </Route>

        {/* 인증/권한 여부와 상관 없이 접근 가능한 Error 페이지 정의 */}
        {/* <Route path="/*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
