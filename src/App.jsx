import { StoreContext } from "storeon/react"
import store from "@store"
import React from "react"
import Menu from "./pages/mainMenu/Menu"
import "./App.css"

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Menu />
      </div>
    </StoreContext.Provider>
  )
}

export default App
