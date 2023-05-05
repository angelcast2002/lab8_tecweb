import React from "react"
import styles from "./Menu.module.css"
import Input from "../../components/input/Input"

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <h1>Menu</h1>
      <div className={styles.opcionesContainer}>
        <span>Ingrese el ancho del laberinto</span>
        <Input name="ancho" type="number" placeholder="Ancho" />
        <span>Ingrese el alto del laberinto</span>
        <Input name="alto" type="number" placeholder="Alto" />
        <span>Contra reloj:</span>
        <div className={styles.timerContainer}>
          <Input name="timer" type="number" placeholder="Ingrese el tiempo" />
          <Input type="checkbox" />
        </div>
      </div>
    </div>
  )
}

export default Menu
