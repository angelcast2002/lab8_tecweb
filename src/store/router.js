import { createRouter } from "@storeon/router"

export default createRouter([
  ["/", () => ({ page: "menu" })],
  ["/game", () => ({ page: "game" })],
  ["/gameover", () => ({ page: "gameover" })],
])
