import { useState } from "react";

function ToDo() {
  console.log("render");

  const [userInput, setUserInput] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const addList = () => {
    console.log("render insid ");
    setList([...list, userInput]);
    setUserInput("");
  };
  const hhhh = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  return (
    <div>
      <input value={userInput} onChange={hhhh}></input>
      <br></br>
      <button onClick={addList}>Add</button>
      <br></br>
      {/* {userInput} */}
      <ul>
        {list.map((item, id) => (
          <div key={id}>
            <div>
              <li>{item}</li>
              <button>delete</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
