import { StoreContext } from "storeon/react"
import store from "@store"
import React from "react"
import Menu from "./pages/mainMenu/Menu"
import Game from "./pages/Game/Game"
import "./App.css"

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Game />
      </div>
    </StoreContext.Provider>
  )
}

export default App
