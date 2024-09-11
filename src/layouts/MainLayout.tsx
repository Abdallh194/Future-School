import Footer from "@Components/Common/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
