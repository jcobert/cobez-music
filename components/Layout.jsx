import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {

  return (
    <div className="flex-grow bg-hero bg-cover bg-no-repeat bg-fixed bg-top">
      <Header />
      <div className="min-h-screen flex flex-col bg-black/70">
        <div className="w-full mx-auto mt-16 sm:mt-16">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
