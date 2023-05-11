import React from "react"
import PropTypes from "prop-types"
import style from "./button.module.css"

export const Button = ({ label, backgroundColor, textColor }) => (
  <div className={style.buttonContainer}>
    <button
      type="button"
      style={{ backgroundColor, color: textColor }}
    >
      {label}
    </button>
  </div>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
}

Button.defaultProps = {
  backgroundColor: "#fff",
  textColor: "#000",
}

export default Button
