import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div>
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Main;
