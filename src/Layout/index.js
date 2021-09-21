import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./Header"
import CreateDeck from "./CreateDeck"
import StudyDeck from "./StudyDeck"
import ViewDeck from "./ViewDeck"
import NotFound from "./NotFound"

const Layout = () => {

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path ="decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="decks/:deckId">
            <ViewDeck />
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
