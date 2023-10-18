import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { buttonClassName } from "./Button";

const AppLayout: FunctionComponent = () => {
  return (
    <main className="container mx-auto my-8">
      <header className="flex justify-between pb-8">
        <h1 className="text-xl font-semibold text-gray-900">
          <Link to="./" className="transition-colors hover:text-blue-700">
            <span role="img" aria-hidden>
              ☕️
            </span>{" "}
            A Coffee Snob's favourite
          </Link>
        </h1>

        <Link
          className={buttonClassName({ variant: "secondary", size: "xs" })}
          to="/coffee/add"
        >
          Add a new coffee
        </Link>
      </header>
      <Outlet />
    </main>
  );
};

export default AppLayout;
