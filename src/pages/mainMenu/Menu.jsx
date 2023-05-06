import React from "react"
import styles from "./Menu.module.css"
import Input from "../../components/input/Input"
import DropDonw from "../../components/dropDonw/DropDonw"

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <h1>Menu</h1>
      <div className={styles.opcionesContainer}>
        <div className={styles.subOpcionContainer}>
          <span>Ingrese el ancho del laberinto</span>
          <Input name="ancho" type="number" placeholder="Ancho" />
        </div>
        <div className={styles.subOpcionContainer}>
          <span>Ingrese el alto del laberinto</span>
          <Input name="alto" type="number" placeholder="Alto" />
        </div>
        <div className={styles.subOpcionTimeContainer}>
          <span>Contra reloj:</span>
          <div className={styles.timerContainer}>
            <Input name="timer" type="number" placeholder="Ingrese el tiempo" />
            <Input type="checkbox" />
          </div>
        </div>
        <DropDonw opciones={[{ value: "1", label: "Skin 1" }, { value: "2", label: "Skin 2" }]} />
      </div>
    </div>
  )
}

export default Menu
