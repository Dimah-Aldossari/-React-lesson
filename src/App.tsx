import "./App.css";
// import Effect from "./hooks/Effect";
// import Params from "./hooks/Params";
import ApiLap from "./hooks/ApiLap";
import { Routes, Route } from "react-router-dom";
import ShowData from "./hooks/ShowData";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/ApiLap" element={<ApiLap />}></Route>
        <Route path="ShowData/:id" element={<ShowData />}></Route>
        {/* <Route path="/" element={<Effect />} />
        <Route path="/Params/:id" element={<Params />} /> */}
      </Routes>
    </>
  );
}
