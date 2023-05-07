import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./InputPill.module.css"

function InputPill({ opciones, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div className={styles.inputPillContainer}>
      {opciones.map((tema) => (
        <button
          key={tema.id}
          type="button"
          onClick={() => {
            setSelectedOption(tema.id)
            onSelect(tema)
          }}
        >
          {tema.label}
        </button>
      ))}
    </div>
  )
}

InputPill.defaultProps = {
  opciones: [
    { id: "1", label: "Opción 1" },
    { id: "2", label: "Opción 2" },
    { id: "3", label: "Opción 3" },
  ],
}

InputPill.propTypes = {
  opciones: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onSelect: PropTypes.func.isRequired,
}

export default InputPill
