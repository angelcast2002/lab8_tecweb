/* eslint-disable arrow-body-style */
import React from "react"
import PropTypes from "prop-types"
import styles from "./InputPill.module.css"

const InputPill = ({ opciones, onSelect }) => {
  return (
    <div className={styles.inputPillContainer}>
      {opciones.map((tema) => (
        <button
          key={tema.id}
          value={tema.id}
          type="button"
          onClick={() => {
            onSelect(tema.id)
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
    { id: "0", label: "Opción 1" },
    { id: "1", label: "Opción 2" },
    { id: "2", label: "Opción 3" },
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
