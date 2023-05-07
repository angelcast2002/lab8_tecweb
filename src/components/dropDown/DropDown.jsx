import React, { useState } from "react"
import PropTypes, { string } from "prop-types"
import styles from "./DropDown.module.css"

const DropDown = ({ opciones }) => {
  const [selectedOption, setSelectedOption] = useState(opciones[0])

  const handleOptionChange = (opcion) => {
    setSelectedOption(opcion)
  }

  return (
    <div className={styles.dropDownContainer}>
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

DropDown.propTypes = {
  opciones: PropTypes.arrayOf(
    PropTypes.shape({
      value: string.isRequired,
      label: string.isRequired,
    }),
  ).isRequired,
}

export default DropDown
