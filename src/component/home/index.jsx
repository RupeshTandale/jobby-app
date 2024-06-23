import "./index.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";


const Home = () => {

    const navigate = useNavigate();

    const currentCookie = Cookies.get("jwtToken");
    
    useEffect(()=>{
        if(currentCookie === undefined){
            navigate("/login")
        }
    })





    return(
        <>
        <h1>Home Component</h1>
        </>
    )
}

export default Home;