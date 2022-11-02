import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout: FC = () => {
  return (
    <div className="layout">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
