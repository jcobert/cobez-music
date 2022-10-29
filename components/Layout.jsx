import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {

  return (
    <div className="flex-grow bg-slate-50">
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="w-full max-w-layoutMax mx-auto mt-24 sm:mt-32 px-8 md:px-10 lg:px-16">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
