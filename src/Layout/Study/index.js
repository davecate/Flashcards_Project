import React, { useEffect, useState } from "react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"

import { readDeck } from "../../utils/api"

const StudyDeck = ( { deck, setDeck, card, setCard } ) => {
  console.log(card)
  const herstory = useHistory()
  const { deckId } = useRouteMatch().params
  const [ flip, setFlip ] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()
    const abortSignal = abortController.signal
    const cleanup = () => abortController.abort
    
    const loadDeck = async () => {
      setFlip(false)
      try {
        const deckData = await readDeck(deckId, abortSignal)
        setDeck(deckData)
        setCard(deckData.cards[0])
        } catch (error) {
          if (error.name === "Aborted") {console.log("Aborted")}
          else {throw error}
        }
    }

    loadDeck()
    return cleanup
  }, [deckId, setDeck, setCard, setFlip])

  const flipCard = () => setFlip(!flip)
  const drawLastCard = () => setCard(deck.cards[deck.cards.length])
  const drawNextCard = () => setCard(deck.cards[card.id])
  const drawCard = () => deck.cards.length === card.id ? drawLastCard() : drawNextCard()

  const handleReset = async () => {
    const confirmMeDaddy = "Reset cards? Click 'Cancel' to return to the home page."
    const confirm = window.confirm(confirmMeDaddy)
    confirm === true ? 
      await setCard(deck.cards[0]) : herstory.go("/")
  }

  const handleNext = async () => flipCard() && card.id === deck.cards.length ? 
    await handleReset() : drawCard()

  const nextCard = flip === true ? 
  (<Link to="#" className="card-link btn btn-primary" onClick={() => handleNext()}>Next</Link>) : null

  const cardText = flip === true ? card.back : card.front

  return (
    <div className="container">
      <h1>    
        Now Studying {deck.name}
      </h1>
      <div className="card" >
      <div className="card-body">
        <h5 className="card-title">Card {card.id} of {deck.cards.length}</h5>
        <p className="card-text">{cardText}</p>
        <Link to="#" className="card-link btn btn-secondary" onClick={flipCard}>Flip</Link>
        {nextCard}
      </div>
    </div>
  </div>
  )
}

export default StudyDeck