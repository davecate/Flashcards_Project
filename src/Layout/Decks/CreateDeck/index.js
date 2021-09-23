import React, { useEffect } from "react"

import DeckForm from "../DeckForm"
import Breadcrumb from "./Breadcrumb"

const CreateDeck = ( { deck, setDeck } ) => {

  useEffect(() => {
    const loadBlankDeck = () => setDeck({ name: "", description: "",})
    loadBlankDeck()
  }, [setDeck])
  
  return (
    <div className="container">
      <Breadcrumb />
      <h1>Create Deck</h1>
      <DeckForm deck={deck} setDeck={setDeck} />
    </div>
    )
}

export default CreateDeck