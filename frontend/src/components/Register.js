import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";

const Register = () => {

    let history = useHistory();

    const [input, setinput] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const handlesignup = async (e) => {
        e.preventDefault();

        // if (input.password === input.cpassword) {
        //     console.log("same password")
        // }

        try {
            const response = await fetch("http://localhost:3001/api/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: input.name, email: input.email, password: input.password })
            });
            const json = await response.json()
            // console.log(json);

            if (json.success) {
                window.alert("Sign-Up Successfully")

                //save the auth-token
                // localStorage.setItem('token', json.authtoken)
                //redirect
                history.push("/login");
            } else if (!json.success) {
                window.alert("This email is already exist.")
                setinput({
                    name: "",
                    email: "",
                    password: "",
                    cpassword: ""
                })
            } else {
                window.alert("Sign-Up Error")
            }
        } catch (err) {
            // console.log("errorrrrr")
            window.alert("Error");
        }

    }

    const handlechange = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div >
                <div className="register_Container">
                    <div className="Card">
                        <div className="left_register">
                            <img src="./image/register.png" alt="Loading" className="img" />
                            <div className="thought">
                                <p className="linezero"><span>Y</span>ou</p>
                                <p className="line1"> are writing your success story,</p>
                                <p className="line2"> Doesn't let anyone hold the </p>
                                <p className="line3">"Pen".</p>
                            </div>
                        </div>

                        <form className="form" onSubmit={handlesignup} >
                            <div className="right_register">
                                <h1>Sign Up</h1>
                                <div className="inputbox">
                                    <input type="text" id="name" name="name" value={input.name} onChange={handlechange} autoComplete="off" required />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="inputbox">
                                    <input type="email" id="email" name="email" value={input.email} onChange={handlechange} autoComplete="off" required />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="inputbox">
                                    <input type="password" id="password" name="password" value={input.password} onChange={handlechange} autoComplete="off" minLength={6} required />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="inputbox">
                                    <input type="password" id="cpassword" name="cpassword" value={input.cpassword} onChange={handlechange} autoComplete="off" minLength={6} required />
                                    <label htmlFor="cpassword">Confirm Password</label>
                                </div>

                                <button type="submit" className="button r_btn">Sign up</button>

                                <div className="signup">
                                    <p>Already have an account.  <Link to="/login">Sign in</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;