import React, { useEffect } from "react"
import { useRouteMatch } from "react-router-dom"

import { readDeck, listCards } from "../../../utils/api"

import Breadcrumb from "./Components/Breadcrumb"
import Card from "./Components/Card"
import DeckInfo from "./Components/DeckInfo"

const ViewDeck = ( { deck, setDeck, cards, setCards } ) => {
  const { deckId } = useRouteMatch().params

  useEffect(() => {
    setCards([])
    const abortController = new AbortController()
    const abortSignal = abortController.signal
    const cleanup = () => abortController.abort

    const loadDeck = async () => {
      try {
        const deckData = await readDeck(deckId, abortSignal)
        const cardsData = await listCards(deckId, abortSignal)
        setDeck(deckData)
        setCards(cardsData)
      } catch (error) {
        if (error.name === "Aborted") {console.log("Aborted")}
        else {throw error}
      }
    }

    loadDeck()

    return cleanup
  }, [deckId, setDeck, setCards])

  const list = cards.map((card, index) => <Card key={index} card={card} front={card.front} back={card.back} />)

    return (
      <main className="container">
        <div className="col">
          <Breadcrumb deck={deck} />
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