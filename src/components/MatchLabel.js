import { useState } from "react"
import { Toast } from "react-bootstrap"

export default function MatchLabel({showLabel}){

    let result = "";
    switch (showLabel){
        case 1:
            result = "It's a match!";
            break;
        case 2: 
            result = "Try again!"
            break;
        default:
            break;
    }
    

    return(
        <>
            <Toast className="text-center match-label" show={showLabel > 0 ? true : false}>
                {result}
            </Toast>
        </>
    )
}