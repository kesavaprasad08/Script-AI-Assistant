import Header from "../Header";
import RichTextEditor from "react-rte";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import authContext from "../../store/authContext";
import { IoHomeOutline } from "react-icons/io5";

const Editor = () => {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const location = useLocation();
  const data = location.state;
  const authCtx = useContext(authContext);
  const navigate = useNavigate();
  const token = authCtx.token;
  useEffect(() => {
    setValue(RichTextEditor.createValueFromString(data.script, "html"));
  }, [data]);

  const changeHandler = (val) => {
    setValue(val);
  };
  const saveToDb = async () => {
    try {
      if (!data.editMode) {
        let scriptData = value.toString("html");
        await axios.post(
          "http://localhost:4000/script/",
          {
            script: scriptData,
            title: data.title,
            genre: data.genre,
            synopsis: data.synopsis,
          },
          {
            headers: { authorization: token },
          }
        );
        navigate("/dashboard");
      } else {
        let scriptData = value.toString("html");
        await axios.put(
          "http://localhost:4000/script/",
          {
            script: scriptData,
            id: data.id,
          },
          {
            headers: { authorization: token },
          }
        );
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const cancelHandler = () => {
    navigate("/dashboard");
  };

  return (

    <div className="bg-blue-200 h-full  ">
      <div className="flex justify-between p-4 bg-blue-100 ">
        <div className="flex font-bold  ">
          <a href="/" className="font-bold mr-4">MMAI</a>
          <IoHomeOutline className="text-xl mr-2 " />
          <p>Dashboard</p>
        </div>
       
      </div>
      <div className="flex flex-col items-center  h-full ml-10">
        <div className="flex m-2">
          
          <button
            onClick={saveToDb}
            className="bg-blue-500 text-white px-4 py-2 mt-28 mr-10 rounded-full"
          >
            Save
          </button>
          <button
            onClick={cancelHandler}
            className="bg-blue-500 text-white px-4 py-2 mt-28   rounded-full"
          >
            Cancel
          </button>
        </div>
        <div className="flex justify-center">
          <RichTextEditor
            className="w-6/12 h-screen p-5 h-full"
            value={value}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
