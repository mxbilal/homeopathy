import { Outlet } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";
import FooterPage from "../../components/FooterPage";

const LayoutPage = () => (
  <div className="h-screen">
    <HeaderPage />
    <Outlet />
    <FooterPage />
  </div>
);

export default LayoutPage;
