import React, { useEffect } from "react"
import { useRouteMatch } from "react-router-dom"
import { readDeck } from "../../../utils/api"
import Breadcrumb from "./Components/Breadcrumb"
import Card from "./Components/Card"
import DeckInfo from "./Components/DeckInfo"

const ViewDeck = ( { deck, setDeck, cards, setCards } ) => {

  // Hook to get deck id from route parameters
  const { deckId } = useRouteMatch().params

  // Hook to load state variables using the api call readDeck()
  useEffect(() => {
    const abortController = new AbortController()
    const abortSignal = abortController.signal
    const cleanup = () => abortController.abort

    const loadDeck = async () => {
      try {
        const deckData = await readDeck(deckId, abortSignal)
        setDeck(deckData)
        setCards(deckData.cards)
      } catch (error) {
        if (error.name === "Aborted") {console.log("Aborted")}
        else {throw error}
      }
    }

    loadDeck()

    return cleanup

  }, [deckId, setDeck, setCards])

  // List of cards displaying front text, back text, and actions (edit, delete)
  const list = cards.map((card, index) => <Card key={index} card={card} />)

  return (
    <main className="container">
      <div className="col">
        {/* Breadcrumb nav bar */}
        <Breadcrumb deck={deck} />
        {/* Deck info: displays title, description and actions (edit, study, add card, delete) */}
        <DeckInfo deck={deck} />
        <div className="row mt-4">
          <div className="col">
            <h3>Cards</h3>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            {list}
          </div>
        </div>
      </div>
    </main>
  )

}

export default ViewDeck