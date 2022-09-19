import React, { useState } from "react";
import { Image } from "react-bootstrap";
import cardsProps from '../cards.json'
import Table from '../components/Table';
import StartScreen from "./StartScreen";
import Timer from "./Timer";
import EndScreen from "./EndScreen";
import background from "../audio/background.mp3";


const bgMusic = new Audio(background);
bgMusic.loop = true;
bgMusic.play();
bgMusic.volume = 0.03;

export default function GameManager(){
  let initial = [];
  const time = 2000;

  const [seconds, setSeconds] = useState(time);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const [showEndScreen, setShowEndScreen] = useState(0);
  const [showStartScreen, setshowStartScreen] = useState(true);

  const [cardArr, setCardArr] = useState(initial);

  const audioOff = "%PUBLIC_URL%/../images/sound--off.svg";
  const audioOn = "%PUBLIC_URL%/../images/sound--on.svg";
  const [audioImg, setAudioImg] = useState(audioOff)

  const toggleBgAudio = ()=>{
    if (!bgMusic.paused){
      bgMusic.pause();
      setAudioImg(audioOff);
    } else {
      bgMusic.play();
      setAudioImg(audioOn);
      console.log("played audio");
    }
  }

  randomizeCardsPositions(cardsProps);

  function resetCards(){
    initial = [];
    randomizeCardsPositions(cardsProps);
    setCardArr(initial);
  }

  function randomizeCardsPositions(){
    for (let entry of Object.keys(cardsProps)){
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

    return initial;
  }

  function toggleTimer(){
    setIsTimerActive(!isTimerActive);
  }

  function resetTimer(){
    setSeconds(time);
    setIsTimerActive(true);
  }

  function handlePlayAgain(){
    setShowEndScreen(0);
    resetTimer();
    resetCards();
    setshowStartScreen(true);
  }

  return(
        <>
          <Image onClick={toggleBgAudio}  className="m-3 audio img-fluid" src={audioImg}></Image>
          <Timer
            seconds = {seconds}
            setSeconds = {setSeconds}
            isTimerActive = {isTimerActive}
            showEndScreen = {showEndScreen}
            setShowEndScreen = {setShowEndScreen}
          >
          </Timer>

          <Table
            cardArr={cardArr}
            setCardArr={setCardArr}
            cardProps = {cardsProps}
            arr = {initial}
            setShowEndScreen = {setShowEndScreen}
          ></Table>

          <StartScreen
            showStartScreen = {showStartScreen}
            setShowStartScreen = {setshowStartScreen}
            toggleTimer = {toggleTimer}
          ></StartScreen>

          <EndScreen
            showEndScreen = {showEndScreen}
            handlePlayAgain = {handlePlayAgain}
            resetTimer = {resetTimer}
          ></EndScreen>
        </>
  )
}


