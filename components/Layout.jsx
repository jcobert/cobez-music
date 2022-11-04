import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {

  return (
    <div className="flex-grow bg-hero bg-cover bg-no-repeat bg-fixed bg-top">
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="w-full max-w-layoutMax mx-auto mt-24 sm:mt-32 px-2 sm:px-4 md:px-10 lg:px-16">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
