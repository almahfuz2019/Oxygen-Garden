import { Outlet } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Navbar } from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
const Root = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
