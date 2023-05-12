import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"
import React from "react"
import Menu from "./mainMenu/Menu"
import Game from "./Game/Game"

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  console.log(route)
  switch (route.match.page) {
    case "menu":
      Component = <Menu />
      break
    case "game":
      Component = <Game />
      break
    default:
      Component = <h1>404 Error</h1>
  }

  return (
    <main>
      {Component}
    </main>
  )
}

export default Page
