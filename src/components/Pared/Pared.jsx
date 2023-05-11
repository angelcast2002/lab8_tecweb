import React from "react"
import PropTypes from "prop-types"
import style from "./Pared.module.css"

const Pared = ({ skin, orientation }) => (
  <div className={style.pared}>
    <img
      src={skin}
      alt="pared"
      style={{
        transform: `rotate(${orientation}deg)`,
      }}
    />
  </div>
)

Pared.propTypes = {
  skin: PropTypes.string.isRequired,
  orientation: PropTypes.number.isRequired,
}

export default Pared
