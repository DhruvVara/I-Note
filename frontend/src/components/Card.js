import React, { useState } from "react";
import "./Card.css";
import Edit from "./Edit";

const Card = ({ obj, deletetask,index, setNote, Note }) => {

    const [modal, setmodal] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#faedd2"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const handledelete = async (id) => {
        deletetask(id);

    }

    const toggle = () => {
        setmodal(!modal);
    }



    return (
        <>
            <div className="card-wrapper mr-3">
                <div className="card-top" style={{ "backgroundColor": colors[index % 5].primaryColor }} ></div>
                <div className="task-holder">
                    <span className="card-header" style={{ "backgroundColor": colors[index % 5].secondaryColor }}>{obj.title}</span>
                    <p className="mt-3">{obj.description}</p>

                    <div className="icons">
                        <i className="far fa-edit mr-3 edit" style={{ "color": colors[index % 5].primaryColor }} onClick={() => setmodal(true)}></i>
                        <i className="fas fa-trash-alt delete" style={{ "color": colors[index % 5].primaryColor }} onClick={()=>{handledelete(obj._id)}} ></i>
                    </div>
                </div>
                <Edit modal={modal} setmodal={setmodal} toggle={toggle} setNote={setNote} Note={Note} obj={obj} />
            </div>
        </>
    )
}

export default Card;