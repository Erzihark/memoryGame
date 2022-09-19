import React, { useState, useEffect } from "react";
import MemCard from "./MemCard.js"
import {Row, Col, Container} from 'react-bootstrap';
import MatchLabel from "./MatchLabel.js";
import success from "../audio/SUCCESS.mp3";
import correct from "../audio/correct.mp3";
import incorrect from "../audio/incorrect.mp3";

let prevCardId = 0;
let prevCardPos = -1;
let isPromiseDone = true;
export default function Table({cardProps, setShowEndScreen, cardArr, setCardArr}){

    const [showLabel, setShowLabel] = useState(false);

    const win = new Audio(success);
    const wrong = new Audio(incorrect);
    const right = new Audio(correct);
    win.volume = 0.05;
    wrong.volume = 0.05;
    right.volume = 0.05;
    
    const playIncorrect = ()=>{
        wrong.play();
    }

    const playCorrect = ()=>{
        right.play();
    }

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
        setCardArr(newArr);
        
        await checkForMatch(pos, id);
        sleep(1000);
    }
    
    const checkForMatch = (pos, id)=>{
        
        if (prevCardId === id){
            //correct
            playCorrect();
            prevCardId = 0;
            prevCardPos = -1;
            setShowLabel(1);
            sleep(1000).then(()=>{
                setShowLabel(0);
            })
        } else if(prevCardId === 0){
            //new try
            prevCardId = id;
            prevCardPos = pos;
        } else {
            //incorrect
            let newArr = [...cardArr]; 
            isPromiseDone = false;
            playIncorrect();
            setShowLabel(2);
            sleep(1000).then(()=>{
                newArr[pos] = Math.abs(newArr[pos]);
                newArr[prevCardPos] = Math.abs(newArr[prevCardPos]);
                setCardArr(newArr);
                prevCardId = 0;
                prevCardPos = -1;
                isPromiseDone = true;
                
                sleep(500).then(()=>{
                    setShowLabel(0);
                })
            })
        }
    }

    useEffect(()=>{
        for(let i = 0; i < cardArr.length; i++){
            if (cardArr[i] > 0){
                return;
            }
        }
        win.play();
        setShowEndScreen(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardArr, setCardArr])


    return(
        <>
            <Container fluid="md">
                <MatchLabel
                    showLabel={showLabel}
                >
                </MatchLabel>

                <Row className="mb-3">
                    {cardArr.map((val, idx) =>{ 
                        return (
                            <Col className="card-container" align="center" xs={4} sm={4} md={4} lg={3} >
                                <MemCard 
                                    img={cardProps[Math.abs(val).toString()]?.img}
                                    id={val} 
                                    cardArr={cardArr} 
                                    pos={idx} 
                                    flipCard={flipCard}
                                    >
                                </MemCard>
                            </Col>
                        )
                    })}
                </Row>
                
            </Container>
            
        </>
    )
}