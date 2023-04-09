import { ReactElement } from "react";
import Header from "./Header";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div>{children}</div>;
    </>
  );
};

export default Layout;
