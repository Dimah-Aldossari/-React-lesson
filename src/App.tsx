import "./App.css";

import { Routes, Route } from "react-router-dom";
import Read from "./API-Component/Read";
import PostApi from "./API-Component/PostApi";
import UbdataUser from "./API-Component/UbdataUser";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostApi />}></Route>
        <Route path="Read" element={<Read />}></Route>
        <Route path="UbdataUser" element={<UbdataUser />}></Route>
      </Routes>
    </>
  );
}
