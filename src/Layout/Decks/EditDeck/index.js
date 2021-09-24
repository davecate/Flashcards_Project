import React from "react"
import DeckForm from "../DeckForm"
import Breadcrumb from "./Breadcrumb"

const EditDeck = ( { deck, setDeck } ) => {

  return (
    <div className="container">
      <div className="col">
        {/* Breadcrumb style nav bar */}
        <Breadcrumb deck={deck} />
        <h1>Edit Deck</h1>
        {/* Deck form: receives deck from state via View Deck screen */}
        <DeckForm deck={deck} setDeck={setDeck} />
      </div>
    </div>
  )
}

export default EditDeck