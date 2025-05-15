import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

function Layout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400 w-[600px] rounded-2xl">
      <Header />
      <Outlet /> 
      <Footer />
    </div>
  );
}

export default Layout;
