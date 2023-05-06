import React, { useState } from "react"
import PropTypes, { string } from "prop-types"
import styles from "./DropDonw.module.css"

const DropDonw = ({ opciones }) => {
  const [selectedOption, setSelectedOption] = useState(opciones[0])

  const handleOptionChange = (opcion) => {
    setSelectedOption(opcion)
  }

  return (
    <div className={styles.dropDonwContainer}>
      <span htmlFor="dropdown">Selecciona una skin:</span>
      <select id="dropdown" onChange={handleOptionChange} value={selectedOption.value}>
        {opciones.map((skin) => (
          <option key={skin.value} value={skin.value}>
            {skin.label}
          </option>
        ))}
      </select>
    </div>
  )
}

DropDonw.propTypes = {
  opciones: PropTypes.arrayOf(string).isRequired,
}

export default DropDonw
