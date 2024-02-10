import { Outlet } from "react-router-dom";

import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

function AuthLayout() {
  return (
    <div className="w-[100vw] sm:w-[66.67vw]  mx-auto flex flex-col items  h-[100vh]">
      <Header />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AuthLayout;
