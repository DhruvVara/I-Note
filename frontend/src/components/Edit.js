import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Edit = ({ modal, setmodal, toggle, obj }) => {

    const host = "http://localhost:3001"
    const [Title, setTitle] = useState('');

    const [Desc, setDesc] = useState('');

    const [id, setid] = useState('');



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

    useEffect(() => {
        setid(obj._id);
        setTitle(obj.title);
        setDesc(obj.description);
    }, [])

    const handleupdate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${host}/api/note/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({ title: Title, description: Desc })
            });
            const json = await response.json();
            // console.log(json);
            setmodal(false);
            // window.alert("Succesfully Updated")
        } catch (err) {
            window.alert("Error")
        }


    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>update Note</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <input type="text" name="title" placeholder="Title" className="form-control" autoComplete="off" value={Title} minLength={1} required onChange={handlechange} />
                        </div>

                        <div className="form-group mt-3">
                            <textarea rows="5" name="description" placeholder="Description..." className="form-control" autoComplete="off" value={Desc} minLength={1} required onChange={handlechange}></textarea>
                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleupdate}>update</Button>
                    <Button color="secondary" onClick={toggle}>Discard</Button>
                </ModalFooter>
            </Modal>

        </>
    )
}

export default Edit;