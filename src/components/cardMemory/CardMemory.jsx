import React from 'react'
import Images from './Images'
import '../../css/CardMemor.css'
import { useState } from 'react'
import { shuffle } from 'lodash'

const CardMemory = () => {

    const [won, setWon] = useState(false)
    const [clicks, setClicks] = useState(0)
    const [cards, setCards] = useState(shuffle([...Images, ...Images]));
    const [foundPairs, setFoundPairs] = useState([])
    const [activeCards, setActiveCards] = useState([]);

    function flipCard(index) {
        if(!won){
            setClicks(clicks + 1)
        }
        

        if (activeCards.length === 0) {
            setActiveCards([index])
        }
        if (activeCards.length === 1) {
            let firstIndex = activeCards[0]
            let secondIndex = index

            if (cards[firstIndex] === cards[secondIndex] && firstIndex !== secondIndex) {
                if (foundPairs.length === cards.length) {
                    setWon(true)
                }
                setFoundPairs([...foundPairs, firstIndex, secondIndex])
            }
            setActiveCards([...activeCards, index])
        }
        if (activeCards.length === 2) {
            setActiveCards([index])
        }

    }

    return (
        <div>
            <div className="board">
                {cards.map((card, index) => {
                    const flippedToFront = (activeCards.indexOf(index) !== -1) || (foundPairs.indexOf(index) !== -1)
                    return (
                        <div className={"card-outer " + (flippedToFront ? 'flipped' : '')}
                            onClick={() => flipCard(index)}>
                            <div className="card">
                                <div className="front">
                                    <img src={card} alt="" />
                                </div>
                                <div className="back" />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="stats">
                {won && (
                    <>You won the game! Congratulations!<br />
                        Click any card to play again.<br /><br />
                    </>
                )}
                Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{foundPairs.length / 2}

            </div>
        </div >
    );
}

export default CardMemory
