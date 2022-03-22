    import React, { useState, useEffect } from "react";
import Create from "./Create.js";
import Card from "./Card";
import "./Home.css";
import { useHistory } from "react-router-dom";


const Home = () => {

    let history = useHistory()

    const host = "http://localhost:3001"
    const [modal, setModal] = useState(false);

    const [Note, setNote] = useState([{
        _id: "",
        title: "",
        description: ""
    }]);

    const fetchNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/note/fetchnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNote(json)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchNotes();
        } else {
            history.push("/login")
        }
    }, [Note])

    const deletetask = async (id) => {

        try {
            const response = await fetch(`${host}/api/note/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                }
            });
            const json = response.json();
            const newNotes = Note.filter((note) => { return note._id !== id })
            setNote(newNotes)
            // console.log(json)
            // console.log(newNotes);
        } catch (err) {
            window.alert("delete error")
        }
    }

    const toggle = () => {
        setModal(!modal);
    }

    const updatelistarray = (obj, index) => {
        let templist = Note;
        templist[index] = obj;
        setNote(templist);
    }

    return (
        <>
            <div className="header text-center">
                <h3>Notes</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create</button>
            </div>
            <div className="task-container">
                {Note.length === 0 && 'No Notes Available'}
                {Note.map((obj, index) => {
                    return (
                        <Card obj={obj} index={index} key={Note._id} setNote={setNote} Note={Note} deletetask={deletetask} updatelistarray={updatelistarray} />
                    )
                })}
            </div>

            <Create toggle={toggle} modal={modal} setModal={setModal} />
        </>
    );
};

export default Home;