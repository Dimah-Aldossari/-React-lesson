import axios from "axios";
import React from "react";

import { useNavigate } from "react-router-dom";

type IuserInfo = {
  userName: string;
  pasword: string;
  emaile: string;
};
function PostApi() {
  const [inputValue, setInputValue] = React.useState<IuserInfo>({
    userName: "",
    pasword: "",
    emaile: "",
  });
  const navgit = useNavigate();
  const logIn = () => {
    axios
      .post("https://64ec45a2f9b2b70f2bfa0612.mockapi.io/logIn", {
        userName: inputValue.userName,
        pasword: inputValue.pasword,
        emaile: inputValue.emaile,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userName", inputValue.userName);
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
    navgit("/Read");
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
      <input
        value={inputValue.pasword}
        placeholder="pasword"
        type="password"
        onChange={(e) => {
          setInputValue({ ...inputValue, pasword: e.target.value });
        }}
      ></input>
      <br />
      <input
        value={inputValue.emaile}
        placeholder="Email"
        type="email"
        onChange={(e) => {
          setInputValue({ ...inputValue, emaile: e.target.value });
        }}
      ></input>
      <br />

      <button onClick={logIn}>logIn</button>
    </div>
  );
}

export default PostApi;
