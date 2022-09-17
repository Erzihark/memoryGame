import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardsProps from '../cards.json'
import Table from '../components/Table';
import StartScreen from "./StartScreen";

//30 sec Timer, also controls the ticking effect at 10 secs left
//Sound option
//Match result: “sorry, but this is not a match” OR “nice! it’s a match”
//Game result: “oops you didn’t find them all” OR “you did it”
//Play again button

export default function GameManager(){

  let initial = [];

  randomizeCardsPositions(cardsProps);

  function randomizeCardsPositions(cards){

    for (let entry of Object.keys(cards)){
      initial.push(parseInt(entry));
      initial.push(parseInt(entry));
    }

    let currentIndex = initial.length;
    let randomIndex;

    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex --;

      [initial[currentIndex], initial[randomIndex]] = [initial[randomIndex], initial[currentIndex]];
    }

  }

  return(
        <>
          <Table
            cardProps={cardsProps}
            arr={initial}
            >
          </Table>
          <StartScreen></StartScreen>
        </>
  )
}


