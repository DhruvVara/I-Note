import React from "react";
import "./Navbar.css";
import { Link, useLocation,useHistory } from "react-router-dom";


const Navbar = () => {
    let history = useHistory()
    let location = useLocation();

    const handlelogout=()=>{
        localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <>
            <div className="navbar-container">
                <div className="left-navbar">
                 <Link className="inote" to="/">I-Note</Link>
                </div>

                <div className="right-navbar">
                    <ul className="navbar-link">
                        <li><Link className={`link ${location.pathname==="/"? "active":""}`} to="/">Home</Link></li>
                        <li><Link className={`link ${location.pathname==="/aboutus"? "active":""}`} to="/aboutus">AboutUs</Link></li>
                        <li><Link className={`link ${location.pathname==="/contactus"? "active":""}`} to="/contactus">ContactUs</Link></li>

                        {!localStorage.getItem('token')?<>
                        {/* <li><button className="btn btn-primary" to="/login"  >Login</button></li>
                        <li><button className="btn btn-primary" to="/signup" >Signup</button></li> */}
                        </>:<button onClick={handlelogout} className="btn btn-primary">Logout</button>}
                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default Navbar;