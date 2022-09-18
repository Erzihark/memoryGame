import React, { useState } from "react";
import MemCard from "./MemCard.js"
import {Row, Col, Container} from 'react-bootstrap';

export default function Table({arr, cardProps}){

    const [cardArr, setCardArr] = useState(arr);
  
    let topArr = cardArr.slice(0, (cardArr.length)/2);
    let botArr = cardArr.slice((cardArr.length)/2, cardArr.length);


    return(
        <Container>
            <Row className="mb-3">
                {topArr.map((val, idx) =>{ 
                    return (
                        <Col align="center">
                            <MemCard 
                                img={cardProps[val.toString()]?.img} //if object is undefined, returns undefined
                                id={val} 
                                cardArr={cardArr} 
                                pos={idx} 
                                setCardArr={setCardArr}
                                >
                            </MemCard>
                        </Col>
                    )
                })}
            </Row>
            <Row className="mb-3">
                {botArr.map((val, idx) =>{
                    return (
                        <Col align="center">
                            <MemCard 
                                img={cardProps[val.toString()]?.img} 
                                id={val} 
                                cardArr={cardArr} 
                                pos={idx + (cardArr.length / 2)}
                                setCardArr={setCardArr}
                                >
                            </MemCard>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}