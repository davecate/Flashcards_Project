import React, { useEffect } from "react"
import DeckForm from "../DeckForm"
import Breadcrumb from "./Breadcrumb"

const CreateDeck = ( { deck, setDeck } ) => {

  // Hook to load blank deck into state (deck id is assigned at upload)
  useEffect(() => {
    const loadBlankDeck = () => setDeck({ name: "", description: "",})
    loadBlankDeck()
  }, [setDeck])
  
  return (
    <div className="container">
      {/* Breadcrumb style nav bar */}
      <Breadcrumb />
      <h1>Create Deck</h1>
      {/* Deck form: receives blank deck from state via hook */}
      <DeckForm deck={deck} setDeck={setDeck} />
    </div>
    )
}

export default CreateDeck