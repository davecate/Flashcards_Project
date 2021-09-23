import React from "react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"

import { deleteCard } from "../../../utils/api"

const Card = ( { card, front, back } ) => {

  const herstory = useHistory()
  const url = useRouteMatch().url

  const confirmMeDaddy = "Delete this card?"

  const handleDelete = async () => {
    const confirm = window.confirm(confirmMeDaddy)
    confirm === true ? 
    await deleteCard(card.id) && herstory.push(url) : herstory.push(url)
    window.location.reload()
  }

  return (
    <div className="card my-2">
      <div className="container mt-2">
        <p className="text-left">{front}</p>
      </div>
      <div className="container">
        <p className="text-right">{back}</p>
      </div>
      <Link to={"/decks/" + card.deckId + "/cards/" + card.id + "/edit"}
        className="btn btn-secondary">Edit</Link>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
    )

}

export default Card