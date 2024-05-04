import axios from "axios";
import { useContext, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { PiFolderStarBold } from "react-icons/pi";
import AuthContext from "../../store/authContext";
import Script from "../Script";
import CreateScriptModal from "../CreateScriptModal";
import { FiPlusCircle } from "react-icons/fi";
import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaDiscord, FaThreads } from "react-icons/fa6";
// import {  } from "react-icons/fi";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const [scripts, setScripts] = useState([]);
  const [showModal,setShowModal]=useState(false);
  const [isLoading,setIsLoading]=useState(false);

  const token = authCtx.token;
  useState(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/script/", {
        headers: { authorization: token },
      })
      .then((res) => {
        
        setScripts(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const closeScriptModal =()=>{
    setShowModal(false)
  }
  const openModal= ()=>{
    setShowModal(true);
  }
  return (
    <div>
      {showModal && <CreateScriptModal onClose={closeScriptModal}/>}
      <div className="flex justify-between p-4 bg-blue-100">
        <div className="flex font-bold ">
          <a href="/" className="font-bold mr-4">MMAI</a>
          <IoHomeOutline className="text-xl mr-2 " />
          <p>Dashboard</p>
        </div>
        <button className=" flex bg-blue-500 p-2 rounded text-white" onClick={openModal}>
         <FiPlusCircle className="text-2xl mr-2"/> Create Script
        </button>
      </div>
      <div className="flex justify-center p-2 bg-blue-200 ">
        <div className="flex bg-white rounded-full p-2 text-blue-500 ">
          <PiFolderStarBold />
          <pre> </pre>
          <p > My Scripts</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-40"> 
     
      {!isLoading && scripts.length > 0 && (
        scripts.map((script) => <Script key={script._id} script={script} />)
      )} 
        {!isLoading &&scripts.length===0 &&<p>No scripts Found</p>}
      
      {isLoading &&   <p>Loading...</p>}
      </div>
      <div className="flex mt-10 bg-blue-300  justify-between p-7">
      <p>MMAAI</p>
      <div className="text-center">
        <p>MMAI 2024</p>
        <p>Privacy Policy | Terms of Service | Referral</p>
        <p>Program | Releases | Help</p>
      </div>  
      <div className="flex text-2xl ">
        <CiInstagram  />
        <CiTwitter />
        <CiYoutube />
        <FaThreads />
        <FaDiscord />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
