import { Button, Modal } from "react-bootstrap";


export default function EndScreen({showEndScreen, handlePlayAgain}){
    let result = "";
    switch (showEndScreen){
        case 1:
            result = "SUCCESS!";
            break;
        case 2: 
            result = "FAILURE"
            break;
        default:
            break;
    }

    return(
        <Modal show={showEndScreen > 0 ? true : false} centered>
            <Modal.Body className="text-center">
                <div className={"end-txt"}>{result}</div>
                <Button className="btn-warning" onClick={handlePlayAgain}>
                    Play Again
                </Button>
            </Modal.Body>
        </Modal>
    )
}