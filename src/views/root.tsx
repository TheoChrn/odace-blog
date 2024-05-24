import { Link, Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const RootLayout = () => {
  return (
    <div className="text-background text-base ">
      <header className="pt-16">
        <Link to={"/"}>
          <h1 className="text-foreground text-4xl w-full text-center ">
            odace+
          </h1>
        </Link>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
