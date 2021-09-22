import React, { useEffect, useState } from "react"
import { useRouteMatch } from "react-router-dom"

import { readDeck, listCards } from "../../utils/api"

import Card from "./Card"
import DeckInfo from "./DeckInfo"

const ViewDeck = ( { deck, setDeck, setCard } ) => {
  const { deckId } = useRouteMatch().params

  const [ cards, setCards ] = useState([])

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

  const list = cards.map((card) => <Card key={card.id} card={card} setCard={setCard} />)

    return (
      <main className="container">
        <div className="col">
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