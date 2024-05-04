import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex bg-black text-white justify-between p-5">
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
  );
};
export default Footer;
