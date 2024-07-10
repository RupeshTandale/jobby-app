import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Cookies from "js-cookie";

const Header = () =>{
    const navigate = useNavigate();

    const handelLogout =()=>{
        Cookies.remove("jwtToken",{path:'/'});          // To remove the cookies stored we have to provide the token name and not the value.
        navigate("/login");
    }

    return (
        <div className='nav-bar-cont'>

            <ul className='nav-bar'>
                <li>
                    <Link to = "/">
                    <img className='nav-logo' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="web logo" />
                    </Link>
                </li>

                <li>    
                    <Link className='n-link' to="/">
                        Home
                    </Link>
                    <Link className='n-link' to="/jobs">
                    jobs
                    </Link>
                </li>

                <li>
                    <button className='btn btn-primary' onClick={handelLogout}>Logout</button>
                </li>

            </ul>

        </div>

    );
}

export default Header;
