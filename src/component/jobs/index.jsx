import "./index.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();

  const currentCookie = Cookies.get("jwtToken");

  useEffect(() => {
    if (currentCookie === undefined) {
      navigate("/login");
    }
  });

  return (
    <>
      <div>
        <h1>Jobs Component</h1>
      </div>
    </>
  );
};

export default Jobs;
