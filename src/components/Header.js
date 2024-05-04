import { useContext } from "react";
import AuthContext from "../store/authContext";
import { useNavigate } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";

const Header = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <nav className="fixed bg-black bg-opacity-70 p-3 pt-5 flex w-full text-white ">
      <div className="flex justify-between w-full">
        <div className="flex">
          <a className="flex" href="/">
            <BiSolidCameraMovie className="text-xl" />
            <pre> MMAAI</pre>
          </a>
        </div>
        <ul className=" flex">
          <li className="mx-2">
            <a href="/dashboard" className="">
              Dashboard
            </a>
          </li>
          <li className="mx-2">
            <a href="/">About Us</a>
          </li>
          <li className="mx-2">
            <a href="/" className="">
              Pricing
            </a>
          </li>
          <li className="mx-2">
            <a href="/" className="">
              For Studios
            </a>
          </li>
          <li className="mx-2">
            <a href="/" className="">
              Features
            </a>
          </li>
          <li className="mx-2">
            <button className="" onClick={props.onShowModal}>
              Create Script
            </button>
          </li>
          <li className="mx-2">
            <a href="/" className="">
              Blog
            </a>
          </li>
          {isLoggedIn ? (
            <li className="mx-2">
              <button
                className="bg-blue-500 text-white px-3 p-1  rounded-full"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="">
              <button
                className="bg-blue-500 text-white px-3 p-1  rounded-full"
                onClick={loginHandler}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
