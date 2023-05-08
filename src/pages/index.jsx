import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"
import React from "react"
import Menu from "./mainMenu/Menu"

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  switch (route.match.page) {
    case "home":
      Component = <Menu />
      break
    default:
      Component = <h1>404</h1>
  }

  return (
    <main>
      {Component}
    </main>
  )
}

export default Page
