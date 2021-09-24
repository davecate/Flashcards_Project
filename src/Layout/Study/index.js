import React, { useEffect } from "react"
import { useRouteMatch } from "react-router-dom"
import { readDeck, listCards } from "../../utils/api"
import Breadcrumb from "./Components/Breadcrumb"
import CardDisplay from "./Components/CardDisplay"
import NotEnoughCards from "./Components/NotEnoughCards"

const Study = ( { deck, setDeck, cards, setCards, card, setCard, } ) => {

  // Hook to get deckId from route parameters
  const { deckId } = useRouteMatch().params

  // Hook to set state variables using api calls readDeck() and listCards()
  useEffect(() => {
    const abortController = new AbortController()
    const abortSignal = abortController.signal
    const cleanup = () => abortController.abort

    const loadStudy = async () => {
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

    loadStudy()

    return cleanup
  }, [deckId, setDeck, setCard, setCards])

  // Conditional render: displays a loading message while current card is being loaded
  // Used as output of next conditional
  const cardDisplay = card ? 
    <CardDisplay 
      card={card} 
      setCard={setCard}
      cards={cards}  />
    :
    <h4>Loading...</h4>

  // Conditional render: displays an error message if the deck has under 3 cards
  // Otherwise displays the current card
  const display = cards.length > 2 ? 
    cardDisplay : <NotEnoughCards deck={deck} cards={cards} />

  return (
    <div className="container">
      {/* "Breadcrumb" style nav bar */}
      <Breadcrumb deck={deck} />
      <h1>{deck.name}</h1>
      {display}
    </div>
  )
}

export default Study