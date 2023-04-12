import { ReactElement } from "react";
import Header from "./Header";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
