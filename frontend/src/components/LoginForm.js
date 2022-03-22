import React, { useState } from "react";
import "./Loginform.css";
import { Link, useHistory } from "react-router-dom";

const Loginform = () => {

    let history = useHistory();

    const [input, setinput] = useState([{
        email: "",
        password: ""
    }])


    const handlelogin = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: input.email, password: input.password })
        });

        const json = await response.json();
        // console.log(json);

        if (json.success) {
            //save the auth-token
            localStorage.setItem('token', json.authtoken)
            //redirect
            history.push("/");
        } else {
            alert("invalid credentials");
        }

    }

    const handlechange = (e) => {
        // const { name, value } = e.target;

        setinput({ ...input, [e.target.name]: e.target.value })
    }


    return (
        <>
            <form onSubmit={handlelogin}>
                <div className="login_Container">
                    <div className="Card">
                        <div className="left">
                            <img src="./image/login.png" alt="Loading" className="img" />
                            <div className="login_thought">
                                <p className="line1">"<span>W</span>ords</p>
                                <p className="line2"> are our most inexhaustible</p>
                                <p className="line3">source of magic."</p>
                            </div>
                        </div>

                        <div className="form">
                            <div className="right">
                                <div className="sign_in">
                                    <p>Sign In</p>
                                </div>

                                <div className="inputbox">
                                    <input type="email" id="email" name="email" value={input.email} autoComplete="off" required onChange={handlechange} />
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="inputbox">
                                    <input type="password" id="password" name="password" value={input.password} autoComplete="off" required onChange={handlechange} />
                                    <label htmlFor="password">Password</label>
                                </div>

                                {/* <div className="fp">
                                    <a href="/">Forgot Password ?</a>
                                </div> */}

                                <button type="submit" className="button" >Login</button>

                                <div className="signup">
                                    <p>Did'nt have an account? <Link to="/signup">Sign up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default Loginform;