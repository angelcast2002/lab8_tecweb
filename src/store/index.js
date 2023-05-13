import { createStoreon } from "storeon"
import { storeonDevtools } from "storeon/devtools"
import { routerNavigate } from "@storeon/router"
import gameConfig from "./gameConfig"
import router from "./router"

const store = createStoreon([
  gameConfig,
  router,
  storeonDevtools,
])

const navigate = (target) => {
  store.dispatch(routerNavigate, target)
}

export { navigate }
export default store
