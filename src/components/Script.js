import { MdMovieEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Script = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const editScriptHandler = () => {
    navigate("/editor", {
      state: {
        editMode: true,
        id: props.script._id,
        script: props.script.script,
        title: props.script.title,
        genre: props.script.genre,
        synopsis: props.script.synopsis,
      },
    });
  };
  return (
    <div className="bg-blue-200 p-6 m-2 lg:w-5/12 w-full rounded shadow-lg ">
      <p className="font-bold text-xl ">{props.script.title}</p>
<div className="py-4"> 
      <div className="flex  ">
        <pre className="">Genre     : </pre>
        {props.script.genre.map((gen) => (
          <p key={gen}>{gen}</p>
        ))}
      </div>
      <div className="flex mb-2 ">
        <pre>Synopsis  : </pre>
        <p>{props.script.synopsis}</p>
      </div>
      </div>
      <button
        className="flex text-blue-500 rounded bg-blue-100 p-2 px-4"
        onClick={editScriptHandler}
      >
        <MdMovieEdit className="text-2xl" />
        <pre> </pre>
        <p>Edit</p>{" "}
      </button>
    </div>
  );
};
export default Script;
