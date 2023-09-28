import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <nav className="flex flex-col md:flex-row  justify-between items-center   py-5  ">
        <div><img src="https://i.ibb.co/yWQbPQ3/Logo.png" alt="" className="mb-4" /></div>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              Donation
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/statistic"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              Statistic
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
