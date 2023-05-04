import React from "react"
import styles from "./Menu.module.css"
import Input from "../../components/input/Input"

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <Input name="ancho" type="number" placeholder="Ancho" />
      <Input name="alto" type="number" placeholder="Alto" />
    </div>
  )
}

export default Menu
