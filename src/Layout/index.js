import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import Header from "./Common/Header"
import DeckList from "./Decks/Home/DeckList"
import Study from "./Decks/Study"
import CreateDeck from "./Decks/CreateDeck"
import ViewDeck from "./Decks/ViewDeck"
import EditDeck from "./Decks/EditDeck"
import AddCard from "./Cards/AddCard"
import EditCard from "./Cards/EditCard"
import NotFound from "./Common/NotFound"

const Layout = () => {

  // Lifted state variables for use in multiple screens
  // Comes loaded with a blank deck to prevent race conditions with Create Deck
  const [ deck, setDeck ] = useState({ name: "", description: "",})
  const [ card, setCard ] = useState({})
  const [ cards, setCards ] = useState([])
 
  return (
    <div>
      <Header />
      <div className = "container">
        <Switch>
          <Route exact path="/">
            <DeckList 
              setDeck={setDeck}
            />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study 
              deck={deck} 
              setDeck={setDeck} 
              card={card} 
              setCard={setCard} 
              cards={cards} 
              setCards={setCards}
            />
          </Route>
          <Route path="/decks/new">
            <CreateDeck 
              deck={deck} 
              setDeck={setDeck}
            />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck 
              deck={deck} 
              setDeck={setDeck}
              card={card} 
              setCard={setCard} 
              cards={cards} 
              setCards={setCards} 
            />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck 
            deck={deck} 
            setDeck={setDeck} 
            />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard 
              deck={deck} 
              setDeck={setDeck} 
              card={card} 
              setCard={setCard} 
            />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard 
              deck={deck} 
              card={card} 
              setCard={setCard} 
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  )

}

export default Layout
