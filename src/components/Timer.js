import React, {useEffect} from 'react';
import '../index.css';
import failure from "../audio/FAILURE.mp3";
import ticking from "../audio/ticking.mp3";


export default function Timer({isTimerActive, seconds, setSeconds, setShowEndScreen, showEndScreen}){

    const tick = new Audio(ticking);
    const fail = new Audio(failure);
    tick.volume = 0.05;
    fail.volume = 0.05;
    
    const playFailure = () => {
        fail.play();
    }

    const playTick = () => {
        tick.play();
    }
    const stopTick = () => {
        tick.pause();
        tick.currentTime = 0;
    }

    useEffect(()=>{
        let interval = null;
        if (seconds < 10){
            playTick();
        }
        if (showEndScreen === 1){
            return () => clearInterval(interval);
        }
        if(seconds === 0){
            setShowEndScreen(2);
            stopTick();
            playFailure();
            return () => clearInterval(interval);
        }

        if (!isTimerActive){
            interval = setInterval(()=>{
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if(!isTimerActive && seconds !== 30) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isTimerActive, seconds])

    return(
        <>
            <div className='timer fixed-top'>
                {seconds}
            </div>
        </>
    )
}