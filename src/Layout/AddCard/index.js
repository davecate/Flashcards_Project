import React, { useEffect } from "react"
import { useRouteMatch } from "react-router-dom"

import CardForm from "../Common/Forms/CardForm"

const AddCard = ( { deck, card, setCard } ) => {
  const { deckId } = useRouteMatch().params
    
  useEffect(() => {
    const loadBlankCard = async () => await setCard({ front: "", back: "", id: "new", deckId: deckId})
    loadBlankCard()
  }, [setCard, deckId])

  return (
    <div className="container pb-4">
      <h2> Add Card to {deck.name}</h2>
      <CardForm deck={deck} card={card} setCard={setCard} />
    </div>
  )
}

export default AddCard