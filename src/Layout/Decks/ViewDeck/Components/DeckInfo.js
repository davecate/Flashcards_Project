import React from "react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"

import { deleteDeck } from "../../../../utils/api"

const DeckInfo = ( { deck } ) => {
  const herstory = useHistory()
  const url = useRouteMatch().url

  const confirmMeDaddy = "Delete this deck?"

  const handleDelete = async () => {
    const confirm = window.confirm(confirmMeDaddy)
    confirm === true ? 
    await deleteDeck(deck.id) && herstory.push("/") : herstory.push(url)
  }

  return (
    <div className="rounded border border-secondary p-2">
      <div className="row">
        <div className="col">
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link to={"/decks/" + deck.id + "/edit"} className="btn btn-secondary">Edit</Link>
        </div>
        <div className="col">
          <Link to={"/decks/" + deck.id + "/study"} className="btn btn-primary">Study</Link>
        </div>
        <div className="col">
          <Link to={"/decks/" + deck.id + "/cards/new"} className="btn btn-primary">Add Card</Link>
        </div>
        <div className="col">
          <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>    
  )

}

export default DeckInfo