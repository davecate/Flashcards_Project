import React from "react"

import DeckForm from "../Common/Forms/DeckForm"
import Breadcrumb from "./Breadcrumb"

const EditDeck = ( { deck, setDeck } ) => {

  return (
    <div className="container">
      <div className="col">
        <Breadcrumb deck={deck} />
        <h1>Edit Deck</h1>
        <DeckForm deck={deck} setDeck={setDeck} />
      </div>
    </div>
  )
}

export default EditDeck