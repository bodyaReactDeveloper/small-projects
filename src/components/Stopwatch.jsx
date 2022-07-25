import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "../css/Stopwatch.module.css"

const Stopwatch = () => {
    const [timer, setTimer] = useState(0)
    const [timerOn, setTimerOn] = useState(false)

    useEffect(() => {
        let interval

        if (timerOn) {
            interval = setInterval(() => {
                setTimer(prevTime => prevTime + 10)
            }, 10)

        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])


    return (
        <div className={style.Stopwatch}>
            <div className={style.title}>Stopwatch</div>
            <div>
                <span>{("0" + Math.floor((timer / 60000000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
            </div>

            <div className={style.btn_container}>
                {!timerOn && timer === 0 &&
                    <button className={style.btn} onClick={() => setTimerOn(true)}>start</button>}

                {timerOn &&
                    <button className={style.btn} onClick={() => setTimerOn(false)}>stop</button>}
                    
                {!timerOn &&
                    <button className={style.btn} onClick={() => setTimerOn(true)}>resume</button>}

                {!timerOn &&
                    <button className={style.btn} onClick={() => setTimer(0)}>reset</button>}

            </div>
        </div>
    )
}

export default Stopwatch