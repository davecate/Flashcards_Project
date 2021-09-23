import React, { useEffect } from "react"
import { useRouteMatch } from "react-router"

import { readCard } from "../../../utils/api"

import CardForm from "../CardForm"
import Breadcrumb from "./Breadcrumb"

const EditCard = ( { deck, card, setCard } ) => {
  const { cardId } = useRouteMatch().params

  useEffect(() => {

    const loadCard = async () => {
      try {
        const cardData = await readCard(cardId)
        setCard(cardData)
      } catch (error) {throw error}
    }

    loadCard()

  }, [cardId, setCard])

  return (
    <div className="container">
      <div className="col">
        <Breadcrumb deck={deck} card={card} />
        <h1>Edit Card</h1>
        <CardForm deck={deck} card={card} setCard={setCard}/>
      </div>
    </div>
    )
}

export default EditCard