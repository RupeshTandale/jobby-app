import Home from "./component/home";
import Login from "./component/login";
import Jobs from "./component/jobs";
import PageNotFound from "./component/not found";
import ProtectedRoute from "./component/protectedRoute";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={Home}/>}></Route>

        <Route path="/login" element={<Login/>}></Route>

        <Route path="/jobs" element={<ProtectedRoute Component={Jobs}/>}></Route>

        <Route path="/*" element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
