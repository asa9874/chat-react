import Body from "./Body";
import SideBar from "./Footer";
import Header from "./Header";

interface LayoutProps {
  showHeaderFooter?: boolean;
}

function Layout({ showHeaderFooter = true }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white w-[600px] rounded-2xl">
      {showHeaderFooter && (
        <div className="flex justify-center w-full h-full ">
          <SideBar />
          <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-2xl">
            <Header />
            <Body />
          </div>
        </div>
      )
      }
      {!showHeaderFooter && (
        <Body />
      )}
    </div>
  );
}

export default Layout;
