import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./Common/Header"
import DeckList from "./Home"
import CreateDeck from "./CreateDeck"
import ViewDeck from "./ViewDeck"
import EditDeck from "./EditDeck"
import AddCard from "./AddCard"
import EditCard from "./EditCard"
import NotFound from "./Common/NotFound"
import StudyDeck from "./Study"

const Layout = () => {

  const [ deck, setDeck ] = useState({})
  const [ card, setCard ] = useState({})
 
  return (
    <>
      <Header />
      <div className = "container">
        <Switch>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck deck={deck} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard deck={deck} card={card} setCard={setCard} />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard deck={deck} card={card} setCard={setCard} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  )

}

export default Layout
