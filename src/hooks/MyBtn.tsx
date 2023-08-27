import { useState } from "react";

function MyBtn() {
  const [name, setName] = useState("Dimah");

  console.log("hello world");

  const clickme = () => {
    if (name == "Dimah") {
      setName("Owis");
    } else {
      setName("Dimah");
    }
  };

  return (
    <div>
      <p>hello</p>
      <button onClick={clickme}>click </button>

      <p>{name}</p>
    </div>
  );
}

export default MyBtn;
