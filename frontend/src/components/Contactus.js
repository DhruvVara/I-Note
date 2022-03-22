import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Contactus.css";


const Contactus = () => {

    const [input, setinput] = useState({
        name: "",
        email: "",
        description: ""
    })

    let history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push("/login")
        }
    })

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/note/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: input.name, email: input.email, description: input.description })
            });
            const json = await response.json()
            // console.log(json);

            // if (json.success) {
            window.alert("Submited successfully");
            setinput({ name: "", email: "", description: "" })
            // }
        } catch (error) {
            // console.log("errrrrr")
            window.alert("Error")
        }
    }

    const handlechange = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form className="contact_form" onSubmit={handlesubmit}>
                <div className="contact_container">
                    <div className="input">
                        <label htmlFor="name">Name:</label>
                        <input type="name" name="name" id="name" autoComplete="off" value={input.name} onChange={handlechange} required />
                    </div>
                    <div className="input">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" id="email" autoComplete="off" value={input.email} onChange={handlechange} required />
                    </div>
                    <div className="input input_description">
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" rows="7" id="description" autoComplete="off" value={input.description} onChange={handlechange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Contactus;