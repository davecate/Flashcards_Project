import React from "react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"

import { deleteCard } from "../../utils/api"

const Card = ( { card } ) => {

  const history = useHistory()
  const url = useRouteMatch().url

  const confirmMeDaddy = "Do you really want to delete this card? It will be gone forever."

  const handleDelete = async () => {
    const confirm = window.confirm(confirmMeDaddy)
    confirm === true ? 
    await deleteCard(card.id) && history.push(url) : history.push(url)
    window.location.reload()
  }

  return (
    <div className="card">
          <p className="text-left">{card.front}</p>
          <p className="text-right">{card.back}</p>
          <Link to={"/decks/" + card.deckId + "/cards/" + card.id + "/edit"}
            className="btn btn-secondary">Edit</Link>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
    )

}

export default Card