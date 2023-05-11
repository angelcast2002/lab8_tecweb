import { createRouter } from "@storeon/router"

export default createRouter([
  ["/", () => ({ page: "Menu" })],
  ["/game", () => ({ page: "Game" })],
  ["/register", () => ({ page: "register" })],
])
