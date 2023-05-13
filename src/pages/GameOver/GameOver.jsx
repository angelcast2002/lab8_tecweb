import React from "react"
import { useStoreon } from "storeon/react"
// eslint-disable-next-line import/no-unresolved
import { navigate } from "@store"
import style from "./GameOver.module.css"
import Button from "../../components/button/Button"

const GameOver = () => {
  const { dispatch } = useStoreon("gameConfig")

  const handleClick = () => {
    dispatch("gameConfig/reset", {})
    navigate("/")
  }

  return (
    <div className={style.menuContainer}>
      <div className={style.subOpcionContainer}>
        <h1>Te haz quedado sin tiempo...</h1>
        <Button label="Regresar al menu" backgroundColor="#fff" size="large" onClick={handleClick} />
      </div>
    </div>
  )
}

export default GameOver
