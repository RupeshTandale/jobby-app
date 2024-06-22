import Home from "./component/home";
import Login from "./component/login";
import Jobs from "./component/jobs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/login" element={<Login/>}></Route>

        <Route path="/jobs" element={<Jobs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
