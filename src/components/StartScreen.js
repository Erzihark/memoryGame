import { Offcanvas, Image } from "react-bootstrap";
import "../index.css";


export default function StartScreen({toggleTimer, showStartScreen, setShowStartScreen}){

    const handleClose = () => {
        setShowStartScreen(false);
        toggleTimer();
    };

    return(
        <>
        <Offcanvas show={showStartScreen} onHide={handleClose} placement="top">
            <Offcanvas.Body>
                <Image className="img-fluid mx-auto d-block" alt="..." src={"%PUBLIC_URL%/../images/logo.svg"}></Image>
            </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas show={showStartScreen} onHide={handleClose} placement="bottom">
            <Offcanvas.Body>
                <Image onClick={handleClose} className="start img-fluid mx-auto d-block" alt="..." src={"%PUBLIC_URL%/../images/start.png"}></Image>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}