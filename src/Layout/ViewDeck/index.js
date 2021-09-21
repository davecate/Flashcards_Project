import React from "react"
import { Switch, Route } from "react-router-dom"

import AddCard from "./AddCard"
import EditCard from "./EditCard"
import EditDeck from "./EditDeck"

const ViewDeck = () => {

    return (
        <>
          <h1>
            View Deck screen
          </h1>
            <Switch>
              <Route path = "/decks/:deckId/edit">
                <EditDeck />
              </Route>
              <Route path = "/decks/:deckId/cards/new">
                <AddCard />
              </Route>
              <Route path = "decks/:deckId/cards/:cardId/edit">
                <EditCard />
              </Route>
            </Switch>
        </>
    )

}

export default ViewDeck