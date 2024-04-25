import Header from "../Header";
import RichTextEditor from "react-rte";
import { useState } from "react";

const Editor = () => {

  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const changeHandler = (val) => {
    let d = localStorage.getItem("data");
    if (d) {
      setValue(RichTextEditor.createValueFromString(d, "html"));
    } else {
      setValue(val);
    }
  };
  const saveToLocal = () => {
    localStorage.setItem("data", value.toString("html"));
  };

  return (
    <div className="bg-orange-900 h-full ">
      <Header />
      <div className="flex flex-col items-center  h-full ml-10">
        <button
          onClick={saveToLocal}
          className="bg-blue-500 text-white px-4 py-2 mt-28   rounded-full"
        >
          Save
        </button>
        <RichTextEditor
          className="w-6/12 h-screen p-5 h-full"
          value={value}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default Editor;
