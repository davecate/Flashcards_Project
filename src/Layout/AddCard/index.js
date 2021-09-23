import React, { useEffect } from "react"
import { useRouteMatch } from "react-router-dom"

import CardForm from "../Common/Forms/CardForm"
import Breadcrumb from "./Breadcrumb"

const AddCard = ( { deck, card, setCard } ) => {
  const { deckId } = useRouteMatch().params
    
  useEffect(() => {
    const loadBlankCard = async () => await setCard({ front: "", back: "", deckId: deckId})
    loadBlankCard()
  }, [deckId, setCard])

  return (
    <div className="container">
      <div className="col">
        <Breadcrumb deck={deck} />
        <h2>{deck.name}: Add Card</h2>
        <CardForm deck={deck} card={card} setCard={setCard} />
      </div>
    </div>
  )
}

export default AddCard