import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import Form from "./Form";

const Menu = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const activeBg = "bg-emerald-500";

  return (
    <div className="border-t absolute z-50 bottom-0 left-0 flex justify-between w-full">
      <Form />
      <Link
        to={"/"}
        className={`${
          pathname === "/" ? activeBg : "bg-white hover:bg-slate-100"
        } w-full p-4 transition-colors`}
      >
        {pathname === "/" ? (
          <GoHomeFill className="mx-auto" color="white" />
        ) : (
          <GoHome className="mx-auto" />
        )}
      </Link>
      <Link
        to={"/transaction"}
        className={`${
          pathname === "/transaction" ? activeBg : "bg-white hover:bg-slate-100"
        } w-full p-4 transition-colors`}
      >
        <GrTransaction
          className="mx-auto"
          color={pathname === "/transaction" ? "white" : "black"}
        />
      </Link>
    </div>
  );
};

export default Menu;
