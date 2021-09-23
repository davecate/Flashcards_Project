import React, { useEffect } from "react"
import { useRouteMatch } from "react-router-dom"

import { readDeck, listCards } from "../../utils/api"
import Breadcrumb from "./Components/Breadcrumb"
import CardDisplay from "./Components/CardDisplay"
import NotEnoughCards from "./Components/NotEnoughCards"

const StudyDeck = ( { deck, setDeck, cards, setCards, card, setCard, } ) => {
  const { deckId } = useRouteMatch().params

  useEffect(() => {
    setCards([])
    const abortController = new AbortController()
    const abortSignal = abortController.signal
    const cleanup = () => abortController.abort

    const loadDeck = async () => {
      try {
        const deckData = await readDeck(deckId, abortSignal)
        const cardsData = await listCards(deckId, abortSignal)
        setDeck(deckData)
        setCards(cardsData)
        setCard(cardsData[0])
      } catch (error) {
        if (error.name === "Aborted") {console.log("Aborted")}
        else {throw error}
      }
    }

    loadDeck()

    return cleanup
  }, [deckId, setDeck, setCard, setCards])

  const cardDisplay = card ? 
    <CardDisplay 
      card={card} 
      setCard={setCard}
      cards={cards}  />
    :
    <h4>Loading...</h4>

  const display = cards.length > 2 ? cardDisplay : <NotEnoughCards deck={deck} cards={cards} />

  return (
    <div className="container">
      <Breadcrumb deck={deck} />
      <h1>    
        {deck.name}
      </h1>
      {display}
    </div>
  )
}

export default StudyDeck