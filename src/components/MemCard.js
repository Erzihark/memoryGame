import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css';


export default function MemCard({img, id, pos, cardArr, flipCard}){

    return(
        <Card id={id} pos={pos} onClick={(e) => flipCard(e, id)} className={cardArr[pos] < 0 ? 'face-up memcard' : 'face-down memcard'}>
            <Card.Img src={"%PUBLIC_URL%/" + img}/>
            <Card.Body>
                    <span className='card-mark'>?</span>
            </Card.Body>
        </Card>
    )
}

