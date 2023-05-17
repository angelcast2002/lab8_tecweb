import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"
import React from "react"
import Menu from "./mainMenu/Menu"
import Game from "./Game/Game"
import GameOver from "./GameOver/GameOver"

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  switch (route.match.page) {
    case "menu":
      Component = <Menu />
      break
    case "game":
      Component = <Game />
      break
    case "gameover":
      Component = <GameOver />
      break
    default:
      Component = <Menu />
  }

  return (
    <main>
      {Component}
    </main>
  )
}

export default Page
