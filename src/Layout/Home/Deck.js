import React from "react"
import { Link } from "react-router-dom"

const Deck = ( { deck = { cards: [] } } ) => {

  return (
    <div className = "container">
      <div className = "row">
        <div className = "col text-left">
          <h5>{deck.name}</h5>
        </div>
        <div className = "col text-right">
          <p className = "text-right">{deck.cards.length} cards</p>
        </div>
      </div>
      <p>{deck.description}</p>
      <div className = "row">
        <div className = "col">
          <Link to = { "/decks/" + deck.id } className = "btn btn-secondary">View</Link>
        </div>
        <div className = "col">
          <Link to = { "/decks/" + deck.id + "/study" } className = "btn btn-primary">Study</Link>
        </div>
      </div>
    </div>
  )

}

export default Deck