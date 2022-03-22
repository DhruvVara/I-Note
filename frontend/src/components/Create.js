import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";


const Create = ({ modal, toggle, setModal }) => {

    const [Title, setTitle] = useState('');

    const [Desc, setDesc] = useState('');

    const host = "http://localhost:3001"

    const handlechange = (e) => {
        // const name = e.target.name,
        // const value = e.target.value
        // or
        const { name, value } = e.target;

        if (name === "title") {
            setTitle(value);
        } else {
            setDesc(value);
        }
    }

    const handlesave = async (e) => {
        e.preventDefault();
        let task = {}
        task["title"] = Title;
        task["description"] = Desc;



        try {
            const res = await axios.post(`${host}/api/note/addnotes`, task, {
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                }
            })
            setTitle("");
            setDesc("");
            setModal(false);
            // window.alert("Succesfully Added")
        } catch (err) {
            window.alert("Please fill both Title and Description");
        }


    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Note</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <input type="text" name="title" placeholder="Title" className="form-control" autoComplete="off" value={Title} onChange={handlechange} />
                        </div>

                        <div className="form-group mt-3">
                            <textarea rows="5" name="description" placeholder="Description..." className="form-control" autoComplete="off" value={Desc} onChange={handlechange} ></textarea>
                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handlesave}>Create</Button>
                    <Button color="secondary" onClick={toggle}>Discard</Button>
                </ModalFooter>
            </Modal>

        </>
    )
}

export default Create;