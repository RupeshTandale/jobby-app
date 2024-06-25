import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const ProtectedRoute = (props) =>{

    const {Component} = props;

    const navigate = useNavigate();

    const currentCookie = Cookies.get('jwtToken');

    useEffect(()=>{
        if(currentCookie === undefined){
            navigate('/login');
        } 
    },[]);

    return(
            <Component/>
    )
}

export default ProtectedRoute;