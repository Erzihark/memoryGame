import { Offcanvas, Button } from "react-bootstrap"
import {React, useState} from 'react'

export default function StartScreen(){

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
        <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        Logo
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

        <Offcanvas show={show} onHide={handleClose} placement="bottom">
            <Offcanvas.Header>
                <Offcanvas.Title>
                    Start
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
            <Button variant="primary" onClick={handleClose} className="me-2">
            Start
            </Button>
        </Offcanvas>
        </>
    )
}