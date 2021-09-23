import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { listDecks } from "../../utils/api"

import Deck from "./Deck"

const DeckList = ( { setDeck } ) => {
  const [ decks, setDecks ] = useState([])

  useEffect(() => {
    setDecks([])
    const abortController = new AbortController()
    const abortSignal = abortController.signal
    const cleanup = () => abortController.abort

    const loadDecks = async () => {
      try {
        const decksData = await listDecks(abortSignal)
        setDecks(decksData)
      } catch (error) {
        if (error.name === "Aborted") {console.log("Aborted")}
        else {throw error}
      }
    }

    loadDecks()

    return cleanup
  }, [setDecks])

  const list = decks.map((deck) => <Deck key={deck.id} deck={deck} setDeck={setDeck} />)

  return (
    <main className="container mb-4">
      <section className="col">
        <Link to="/decks/new" className="btn btn-secondary" >+ Create Deck</Link>
        {list}
      </section>
    </main>
  )
}

export default DeckList