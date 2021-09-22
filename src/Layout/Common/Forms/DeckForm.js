import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import { createDeck } from "../../../utils/api"
import { updateDeck } from "../../../utils/api"


const DeckForm = ( { deck } ) => {
  
  const typeCheck = (create, edit) => deck.id === "new" ? create : edit

  const history = useHistory()
  const toParent = typeCheck("/", ("/decks/" + deck.id))

  const initialFormState = typeCheck({ name: "", description: "", }, 
  { name: deck.name, id: deck.id, description: deck.description, }) 

  const [formData, setFormData] = useState( { ...initialFormState } )

  const handleChange = ( { target } ) => {
    const value = target.value
    setFormData( { 
      ...formData, 
      [target.name]: value 
    } )
  }

  const deckSubmit = async (data, signal) => {
    await deck.id === "new" ? createDeck(data, signal) : updateDeck(data, signal)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const abortController = new AbortController()
    const signal = abortController.signal

    await deckSubmit(formData, signal)

    setFormData( { ...initialFormState } )

    history.push(toParent)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          name="name"
          onChange={handleChange}
          value={formData.name}/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          rows="3"
          className="form-control" 
          id="description" 
          name="description"
          onChange={handleChange}
          value={formData.description}/>
      </div>
      <Link to={toParent} type="button"  className="btn btn-secondary px-2">Cancel</Link>
      <button type="submit" className="btn btn-primary px-2 mx-1">Submit</button>
    </form>
  )

}

export default DeckForm