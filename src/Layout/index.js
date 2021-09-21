import React from "react"
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
 
  return (
    <>
      <Header />
      <div className = "container">
        <Switch>
          <Route exact path = "/">
            <DeckList />
          </Route>
          <Route path = "/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path = "/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path = {"/decks/:deckId"}>
            <ViewDeck />
          </Route>
          <Route path = {"/decks/:deckId/edit"}>
            <EditDeck />
          </Route>
          <Route path = {"/decks/:deckId/cards/new"}>
            <AddCard />
          </Route>
          <Route path = {"/decks/:deckId/cards/:cardId/edit"}>
            <EditCard />
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
