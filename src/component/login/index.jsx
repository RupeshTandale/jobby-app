import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {
  const [allValues,setValues] = useState({
    username:"",
    password:"",
    showError:false,
    errorMsg:""
  });

  const navigate = useNavigate();

  const currentCookie = Cookies.get("jwtToken");

  useEffect(()=>{
    if(currentCookie !== undefined){
      navigate("/");
    }
  },[])


  const onSubmitUserDetails = async (event) => {
    event.preventDefault();

    let api = "https://apis.ccbp.in/login";

    let userDetails = {
      username:  allValues.username,
      password:  allValues.password
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails)
    };

      const response = await fetch(api, options);

      console.log(response);

      const fetchedData = await response.json();

      console.log(fetchedData);

      if(response.ok === true){
        setValues({...allValues,showError:false,errorMsg:""});
        Cookies.set("jwtToken",fetchedData.jwt_token);
        navigate("/")
      }
      else{
        setValues({...allValues,showError:true,errorMsg:fetchedData.error_msg});
      }

  };

    const onChangeUsername = (e)=>{
        setValues({...allValues,username: e.target.value});
    }

    const onChangePassword = (e)=>{
      setValues({...allValues,password: e.target.value});
    }

  return (
    <>
      <div className="login-cont">
        <form className="form-cont" onSubmit={onSubmitUserDetails}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              className="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChangePassword}
            />
          </div>
          <button type="submit" className="btn btn-primary form-control mt-4">
            Submit
          </button>
          {
            allValues.showError ? (<p className="error"><sup>*</sup> {allValues.errorMsg}</p>) : null
          }
        </form>
      </div>
    </>
  );
};

export default Login;
