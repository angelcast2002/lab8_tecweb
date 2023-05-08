import { createRouter } from "@storeon/router"

export default createRouter([
  ["/", () => ({ page: "Menu" })],
  ["/login", () => ({ page: "login" })],
  ["/register", () => ({ page: "register" })],
])
