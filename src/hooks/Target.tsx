import { useState } from "react";

function Target() {
  const [increas, setIncreas] = useState("d");

  const increass = () => {
    setIncreas("ss");
  };
  return (
    <div>
      {increas}
      <br></br>
      <br></br>
      <button onClick={increass}>increas</button>
    </div>
  );
}

export default Target;
