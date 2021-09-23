import React from "react"
import { Link, useHistory } from "react-router-dom"

import { createDeck } from "../../utils/api"
import { updateDeck } from "../../utils/api"


const DeckForm = ( { deck, setDeck } ) => {

  const handleChange = ( { target } ) => {
    const value = target.value
    setDeck( { 
      ...deck, 
      [target.name]: value 
    } )
  }

  const deckSubmit = async (data, signal) => {
    !deck.id? await createDeck(data, signal) : await updateDeck(data, signal)
  }
  const herstory = useHistory()
  const toParent = !deck.id? "/" : "/decks/" + deck.id
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const abortController = new AbortController()
    const abortSignal = abortController.signal
    await deckSubmit(deck, abortSignal)
    herstory.push(toParent)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <textarea
          rows="1"
          className="form-control" 
          id="name" 
          name="name"
          onChange={handleChange}
          value={deck.name}
          placeholder="Deck Name"/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          rows="3"
          className="form-control" 
          id="description" 
          name="description"
          onChange={handleChange}
          value={deck.description}
          placeholder="Brief description of the deck"/>
      </div>
      <Link to={toParent} type="button"  className="btn btn-secondary px-2">Cancel</Link>
      <button type="submit" className="btn btn-primary px-2 mx-1">Submit</button>
    </form>
  )

}

export default DeckForm