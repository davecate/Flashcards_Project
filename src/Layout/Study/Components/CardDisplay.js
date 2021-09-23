import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

const CardDisplay = ( { card, setCard, cards } ) => {
  const herstory = useHistory()
  const [ count, setCount ] = useState(1)
  const [ flip, setFlip ] = useState(false)

  useEffect(() => {
    const loadCard = async () => setCard(cards[count-1])
    setFlip(false)
    loadCard()
  }, [setCard, cards, count])

  const counterLimiter = Math.min(count+1, cards.length)
  const setNextCard = () => setCount(counterLimiter)
  
  const resetMeDaddy = () => {
    const confirmMeDaddy = "Reset cards? Click 'Cancel' to return to the home page."
    const confirm = window.confirm(confirmMeDaddy)
    confirm === true ? setCount(1) : herstory.push("/") 
    setFlip(false)
  }
  
  const handleNext = () => count === cards.length ? resetMeDaddy() : setNextCard()
  
  const cardTitle = <h5 className="card-title">Card {count} of {cards.length}</h5>
  const cardText = flip ?  
    <p className="card-text">{card.back}</p> : <p className="card-text">{card.front}</p>

  const flipCard = <button className="card-link btn btn-secondary" onClick={() => setFlip(!flip)}>Flip</button>
  const nextCard = flip ? 
    <button className="card-link btn btn-primary" onClick={() => handleNext()}>Next</button> : null

  return (
    <div className="card" >
      <div className="card-body">
        {cardTitle}
        {cardText}
        {flipCard}
        {nextCard}
      </div>
    </div>
  )

}

export default CardDisplay