import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./ui/Modal";
import axios from "axios";
import AuthContext from "../store/authContext";


const CreateScriptModal = (props) => {
  const [format, setFormat] = useState("featureFilm");
  const [selected, setSelected] = useState([]);
  const [current, setCurrent] = useState("script");

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext)


  const formatChangeHandler = (e) => {
    setFormat(document.getElementById("format").value);
  };
  const removeSelected = (ele) => {
    setSelected(selected.filter((e) => e !== ele));
  };
  const changeHandler = () => {
    let selectedOne = document.getElementById("format").value;
    if (!selected.includes(selectedOne)) {
      setSelected([...selected, selectedOne]);
    }
  };
  const continueHandler = () => {
    setCurrent("detail");
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const title =e.target.title.value;
      const synopsis =e.target.synopsis.value;
      const genre = selected.join(", ");
      const token =authCtx.token;
      // console.log(title, synopsis, genre, format);
      const response = await axios.post("http://localhost:4000/script/create-script",{title, synopsis, genre, format},{
        headers: { authorization: token },
      });
      if(response.status===200){
        
        navigate(`/editor`,{state:{...response.data,editMode:false}})
      }
    } catch (e) {
      console.log(e);
    }
  };
  let selectedData = selected.map((ele) => (
    <div className="m-1 " key={ele}>
      {ele + "  "}
      <button
        className="text-xs border-2 p-1 bg-red-500 text-white rounded"
        onClick={() => {
          removeSelected(ele);
        }}
      >
        x
      </button>
    </div>
  ));

  let NewScriptDetailsModal = (
    <>
      <div className="flex justify-between pb-2">
        <p>Create a new Script</p>
        <button
          className="bg-red-500 px-2 rounded text-white hover:bg-red-400"
          onClick={props.onClose}
        >
          X
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <input
          name="title"
          className=" border-2 border-slate-500 p-1 w-11/12 m-2 rounded"
          type="text"
          placeholder="Enter Title"
          required
        />
        <input
          name="synopsis"
          className=" border-2 border-slate-500 p-2 w-11/12 m-2 rounded"
          type="text"
          placeholder="Enter Synopsis"
          required
        />
        <label> Select Genre :</label>
        <select
          id="format"
          className="m-2 p-2 border-slate-950 border rounded"
          onChange={changeHandler}
          required
        >
          <option value="" disabled hidden>
            Choose here
          </option>
          <option name="feature" value="Action">
            Action
          </option>
          <option name="short" value="Adventure">
            Adventure
          </option>
          <option name="short" value="Comedy">
            Comedy
          </option>
          <option name="short" value=" Detective/Noir">
            Detective / Noir
          </option>
          <option name="short" value="Drama">
            Drama
          </option>
          <option name="short" value="Fantasy">
            Fantasy
          </option>
          <option name="short" value="Horror">
            Horror
          </option>
          <option name="short" value="Mystery">
            Mystery
          </option>
          <option name="short" value="Romance">
            Romance
          </option>
          <option name="short" value="Thriller">
            Thriller
          </option>
          <option name="short" value="Western">
            Western
          </option>
        </select>
        {selectedData.length > 0 && (
          <div className="flex border-2 m-2 p-1">{selectedData}</div>
        )}

        <button className="bg-blue-500 p-2 rounded text-white hover:bg-blue-400" type="submit">
          Continue
        </button>
      </form>
    </>
  );
  let createScript = (
    <>
      <div className="flex justify-between ">
        <p>Create a new Script</p>
        <button
          className="bg-red-500 text-white p-1 px-2 rounded"
          onClick={props.onClose}
        >
          X
        </button>
      </div>
      <form onChange={formatChangeHandler}>
        <label> Select the format you want to write a script for :</label>
        <select id="format" className="m-2 p-2 border-slate-500 border rounded">
          <option name="feature" value="featureFilm">
            Feature Film
          </option>
          <option name="short" value="videoShort">
            Video Short
          </option>
        </select>
        {format === "featureFilm" && (
          <p className="py-4 text-sm">
            Begin crafting your feature film screenplay with the assistance of
            Co-Pilot's power.
          </p>
        )}
        {format === "videoShort" && (
          <p>
            Take your video shorts to new heights by utilizing AI to craft your
            scripts in screenplay format.
          </p>
        )}
        <button
          onClick={continueHandler}
          className="bg-blue-500 p-2 text-white rounded-full"
          type="submit"
        >
          Continue
        </button>
      </form>
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {current === "script" && createScript}
      {current === "detail" && NewScriptDetailsModal}
    </Modal>
  );
};

export default CreateScriptModal;
