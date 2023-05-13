import React, { useState } from "react"
// eslint-disable-next-line import/no-unresolved
import { navigate } from "@store"
import { useStoreon } from "storeon/react"
import styles from "./Menu.module.css"
import Input from "../../components/input/Input"
import DropDown from "../../components/dropDown/DropDown"
import InputPill from "../../components/inputPill/InputPill"
import Button from "../../components/button/Button"

const Menu = () => {
  const { dispatch } = useStoreon("gameConfig")
  const [ancho, setAncho] = useState(null)
  const [alto, setAlto] = useState(null)
  const [valueDropDown, setValueDropDown] = useState("0")
  const [valueInputPill, setValueInputPill] = useState("0")
  const [valueTime, setValueTime] = useState(0)
  const [valueCheckBox, setValueCheckBox] = useState(false)

  const optionSkins = [
    { value: "0", label: "Human" },
    { value: "1", label: "Cat" },
    { value: "2", label: "Ninja" },
  ]
  const temas = [
    { id: "0", label: "Tema 1" },
    { id: "1", label: "Tema 2" },
    { id: "2", label: "Tema 3" },
  ]

  const handleAncho = (e) => {
    if (e.target.value > 100) {
      setAncho(100)
    } else if (e.target.value < 4) {
      setAncho(4)
    } else {
      setAncho(e.target.value)
    }
  }

  const handleAlto = (e) => {
    if (e.target.value > 100) {
      setAlto(100)
    } else if (e.target.value < 4) {
      setAlto(4)
    } else {
      setAlto(e.target.value)
    }
  }

  const handleDropDownValue = (e) => {
    setValueDropDown(e.target.value)
  }

  const handleSelectInputPill = (e) => {
    setValueInputPill(e)
  }

  const handleTimeToFinish = (e) => {
    if (e.target.value < 0) {
      setValueTime(0)
    } else {
      setValueTime(e.target.value)
    }
  }

  const handleIsChecked = (e) => {
    setValueCheckBox(e.target.checked)
  }

  const handleClick = () => {
    dispatch("gameConfig/set", {
      alto,
      ancho,
      time: valueTime,
      useTime: valueCheckBox,
      skin: valueDropDown,
      tema: valueInputPill,
    })
    navigate("/game")
  }

  return (
    <div className={styles.menuContainer}>
      <h1>Menu</h1>
      <div className={styles.opcionesContainer}>
        <div className={styles.subOpcionContainer}>
          <span>Ingrese el ancho del laberinto</span>
          <Input name="ancho" type="number" placeholder="Ancho" value={ancho} onChange={handleAncho} />
        </div>
        <div className={styles.subOpcionContainer}>
          <span>Ingrese el alto del laberinto</span>
          <Input name="alto" type="number" placeholder="Alto" value={alto} onChange={handleAlto} />
        </div>
        <div className={styles.subOpcionTimeContainer}>
          <span>Contra reloj</span>
          <div className={styles.timerContainer}>
            <Input
              name="timer"
              type="number"
              placeholder="Ingrese el tiempo"
              value={valueTime}
              onChange={handleTimeToFinish}
            />
            <Input name="checkbox" type="checkbox" placeholder="" checked={valueCheckBox} onChange={handleIsChecked} />
          </div>
        </div>
        <div className={styles.subOpcionContainer}>
          <span>Seleccione la skin del jugador</span>
          <DropDown opciones={optionSkins} value={valueDropDown} onChange={handleDropDownValue} />
        </div>
        <div className={styles.subOpcionContainer}>
          <span>Seleccione el tema del laberinto</span>
          <InputPill opciones={temas} value={valueInputPill} onSelect={handleSelectInputPill} />
        </div>
        <div className={styles.subOpcionContainer}>
          <Button label="Jugar" backgroundColor="#fff" size="large" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default Menu
