import React from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ( { deck } ) => {

  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
         <li class="breadcrumb-item"><Link to="/">Home</Link></li>
         <li class="breadcrumb-item active" aria-current="page">{deck.name}</li>
      </ol>
    </nav>
  )

}

export default Breadcrumb