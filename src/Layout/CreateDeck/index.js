import React from "react"

import DeckForm from "../Common/Forms/DeckForm"

const CreateDeck = () => {

  // blank deck allows form component to run
  const blankDeck = { name: "", id: "new", description: "" }
  
  return (
    <div className="container">
      <h1>Create Deck</h1>
      <DeckForm deck={blankDeck} />
    </div>
    )
}

export default CreateDeck