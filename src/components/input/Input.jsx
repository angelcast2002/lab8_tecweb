/* eslint-disable arrow-body-style */
import React from "react"
import PropTypes from "prop-types"
import styles from "./Input.module.css"

const ComponentInput = ({
  name, type, placeholder, value, onChange,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

ComponentInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ComponentInput
