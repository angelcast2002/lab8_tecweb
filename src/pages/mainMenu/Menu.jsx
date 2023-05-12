import React from "react"
import styles from "./Menu.module.css"
import Input from "../../components/input/Input"
import DropDown from "../../components/dropDown/DropDown"
import InputPill from "../../components/inputPill/InputPill"
import Button from "../../components/button/Button"

const Menu = () => {
  const skins = [
    { value: "1", label: "Skin 1" },
    { value: "2", label: "Skin 2" },
    { value: "3", label: "Skin 3" },
  ]
  const temas = [
    { id: "1", label: "Tema 1" },
    { id: "2", label: "Tema 2" },
    { id: "3", label: "Tema 3" },
  ]

  const handleSelectInputPill = (tema) => {
    console.log(tema)
  }

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
          <span>Contra reloj</span>
          <div className={styles.timerContainer}>
            <Input name="timer" type="number" placeholder="Ingrese el tiempo" />
            <Input name="checkbox" type="checkbox" placeholder="" />
          </div>
        </div>
        <div className={styles.subOpcionContainer}>
          <span>Seleccione la skin del jugador</span>
          <DropDown opciones={skins} />
        </div>
        <div className={styles.subOpcionContainer}>
          <span>Seleccione el tema del laberinto</span>
          <InputPill opciones={temas} onSelect={handleSelectInputPill} />
        </div>
        <div className={styles.subOpcionContainer}>
          <Button label="Jugar" backgroundColor="#fff" size="large" />
        </div>
      </div>
    </div>
  )
}

export default Menu
