import React, { useEffect } from "react"
import { useRouteMatch } from "react-router-dom"
import CardForm from "../CardForm"
import Breadcrumb from "./Breadcrumb"

const AddCard = ( { deck, card, setCard } ) => {

  // Hook to get deck id from route parameters
  const { deckId } = useRouteMatch().params
    
  // Hook to load blank card into state (card id is assigned at upload)
  useEffect(() => {
    const loadBlankCard = () => setCard({ front: "", back: "", deckId: deckId})
    loadBlankCard()
  }, [deckId, setCard])

  return (
    <div className="container">
      <div className="col">
        {/* Breadcrumb style nav bar */}
        <Breadcrumb deck={deck} />
        <h2>{deck.name}: Add Card</h2>
        {/* Card form: receives blank deck from state via hook */}
        <CardForm deck={deck} card={card} setCard={setCard} />
      </div>
    </div>
  )
}

export default AddCard