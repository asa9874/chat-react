import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  showHeaderFooter?: boolean;
}

function Layout({ showHeaderFooter = true }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white w-[600px] rounded-2xl">
      {showHeaderFooter && (
        <>
          <Header />
          <Body />
          <Footer />
        </>
      )
      }
      {!showHeaderFooter && (
        <Body />
      )}
    </div>
  );
}

export default Layout;
