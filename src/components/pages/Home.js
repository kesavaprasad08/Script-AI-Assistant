import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { useContext, useState } from "react";
import AuthContext from "../../store/authContext";
import CreateScriptModal from "../CreateScriptModal";
import Footer from "../Footer";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const openScriptModal = () => {
    setShowModal(true);
  };
  const closeScriptModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {/* <NewScriptDetailsModal />
       */}
      {showModal && <CreateScriptModal onClose={closeScriptModal} />}
      <Header onShowModal={openScriptModal} />
      <div
        className="h-screen flex"
        style={{
          backgroundImage: 'url("https://wallpapercave.com/wp/u5BJPWl.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="   h-96 mt-48 ml-24 text-white ">
          <p className="text-8xl mb-1 font-bold">MMAAI</p>
          <p className="text-5xl font-bold mb-5">Film Industry Service Hub</p>
          <p className="text-xl  ">
            Helping bring the next masterpiece to the big screens.
          </p>
          {isLoggedIn && (
            <button
              className="bg-orange-600 p-2 px-6 rounded-full my-4 mr-4 hover:bg-orange-500"
              onClick={() => navigate("/dashboard")}
            >
              Goto Dashboard
            </button>
          )}
          {!isLoggedIn && (
            <button
              className="bg-orange-600 p-2 px-6 rounded-full my-4 mr-4 hover:bg-orange-500"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          )}
          {!isLoggedIn && (
            <button
              className="bg-orange-600 p-2 px-6 rounded-full my-4 mr-4 hover:bg-orange-500"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
      <div className="h-screen bg-black"></div>
      <Footer/>
    </>
  );
};
export default Home;
