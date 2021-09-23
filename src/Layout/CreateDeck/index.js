import React, { useEffect } from "react"

import DeckForm from "../Common/Forms/DeckForm"

const CreateDeck = ( { deck, setDeck } ) => {

  useEffect(() => {
    const loadBlankDeck = async () => await setDeck({ name: "", description: "",})
    loadBlankDeck()
  }, [setDeck])
  
  return (
    <div className="container">
      <h1>Create Deck</h1>
      <DeckForm deck={deck} setDeck={setDeck} />
    </div>
    )
}

export default CreateDeck