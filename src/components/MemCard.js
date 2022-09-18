import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css';
import { useEffect } from 'react';

let prevCardId = 0;
let prevCardPos = -1;
let isPromiseDone = true;
//global variables bad

export default function MemCard({img, id, cardArr, pos, setCardArr}){

    
    const sleep = (ms)=>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const flipCard = async (e, id)=>{
        
        let pos = e.currentTarget.attributes['pos'].value;
    
        if (pos === prevCardPos || cardArr[pos] < 0 || !isPromiseDone){
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
            //before the flag
            let newArr = [...cardArr];
            // newArr[pos] = newArr[pos] * -1;
            // setFlip([...newArr]);
            isPromiseDone = false;
            sleep(1000).then(()=>{
                newArr[pos] = Math.abs(newArr[pos]);
                newArr[prevCardPos] = Math.abs(newArr[prevCardPos]);
                setCardArr(newArr);
                prevCardId = 0;
                prevCardPos = -1;
                isPromiseDone = true;
                //put flag here to know if we are done with the promise
            })
            
        }
        console.log("\n");
        
    }

    useEffect(()=>{
        console.log(cardArr);
    }, [cardArr])

    return(
        <Card id={id} pos={pos} onClick={(e) => flipCard(e, id)} className={cardArr[pos] > 0 ? 'face-up' : 'face-down'}>
            <Card.Img style={{margin: '0 auto', width: '75px', height:'150px'}} src={"%PUBLIC_URL%/" + img}/>
            <Card.Body>?</Card.Body>
        </Card>
    )
}

