import React from "react"

import DeckForm from "../Common/Forms/DeckForm"

const EditDeck = ( { deck } ) => {

  return (
    <div className="container">
      <h1>Edit Deck</h1>
      <DeckForm deck={deck} />
    </div>
  )
}

export default EditDeck