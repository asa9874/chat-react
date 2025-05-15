import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400 w-[600px] rounded-2xl">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Layout;
