import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

type IuserInfo = {
  userName: string;
};
function UbdataUser() {
  const [inputValue, setInputValue] = React.useState<IuserInfo>({
    userName: "",
  });

  const nav = useNavigate();
  const id = localStorage.getItem("id");
  const UpdateData = () => {
    axios
      .put(`https://64ec45a2f9b2b70f2bfa0612.mockapi.io/logIn/${id}`, {
        userName: inputValue.userName,
      })
      .then(() => {
        nav("/read");
      });
  };
  return (
    <div>
      <input
        value={inputValue.userName}
        placeholder="userName"
        type="text"
        onChange={(e) => {
          setInputValue({ ...inputValue, userName: e.target.value });
        }}
      ></input>
      <br />

      <br />

      <button onClick={UpdateData}>Update</button>
    </div>
  );
}

export default UbdataUser;
