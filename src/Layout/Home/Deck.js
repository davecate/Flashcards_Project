import React from "react"
import { Link, useHistory } from "react-router-dom"

import { deleteDeck } from "../../utils/api"

const Deck = ( { deck = { cards: [] } } ) => {
  const history = useHistory()

  const deleteHandler = () => {
    const confirm = window.confirm("Do you really want to delete this deck?")
    confirm === true ? deleteDeck(deck.id) : history.push("/")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-left">
          <h5>{deck.name}</h5>
        </div>
        <div className="col text-right">
          <p className="text-right">{deck.cards.length} cards</p>
        </div>
      </div>
      <p>{deck.description}</p>
      <div className="row">
        <div className="col">
          <Link to={ "/decks/" + deck.id } className="btn btn-secondary">View</Link>
        </div>
        <div className = "col">
          <Link to={ "/decks/" + deck.id + "/study" } className="btn btn-primary">Study</Link>
        </div>
        <div className = "col">
          <button type="button" className="btn btn-danger" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  )

}

export default Deck