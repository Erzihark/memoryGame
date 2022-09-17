import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css';

let prevCardId = 0;
let prevCardPos = -1;

export default function MemCard({img, id, cardArr, pos, setCardArr}){

    
    const sleep = (ms)=>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const flipCard = async (e, id)=>{
        console.log()
        let pos = e.currentTarget.attributes['pos'].value;
    
        if (pos === prevCardPos){
            return;
        }
    
        const newArr = [...cardArr];
        
        newArr[pos] = newArr[pos] * -1;
        console.log("newArr: ", newArr);
        setCardArr(newArr);
        
        await checkForMatch(pos, id);
        sleep(1000);
    }
    
    const checkForMatch = async (pos, id)=>{
        console.log(cardArr);
        console.log("pos: ", pos, "id: ",  id,  "prevPos: ", prevCardPos, "prevId: ", prevCardId);
        
        if (prevCardId === id){
            console.log("match");
            prevCardId = 0;
            prevCardPos = -1;
        } else if(prevCardId === 0){
            console.log("new try");
            prevCardId = id;
            prevCardPos = pos;
            console.log("new previouses: ", prevCardPos, prevCardId)
        } else {
            console.log("try again");
            
            let newArr = [...cardArr];
            // newArr[pos] = newArr[pos] * -1;
            // setFlip([...newArr]);
            
            sleep(1000).then(()=>{
                newArr[pos] = newArr[pos] * -1;
                newArr[prevCardPos] = newArr[prevCardPos] * -1;
                setCardArr(newArr);
            })
            prevCardId = 0;
            prevCardPos = -1;
        }
        console.log("\n");
        
    }

    return(
        <Card id={id} pos={pos} onClick={(e) => flipCard(e, id)} className={cardArr[pos] > 0 ? 'face-up' : 'face-down'}>
            <Card.Img style={{margin: '0 auto', width: '75px', height:'150px'}} src={"%PUBLIC_URL%/" + img}/>
            <Card.Body>?</Card.Body>
        </Card>
    )
}

