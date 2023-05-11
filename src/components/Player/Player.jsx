import React from "react"
import PropTypes from "prop-types"
import styles from "./Player.module.css"

const Player = ({ skin }) => (
  <div className={styles.player}>
    <img src={skin} alt="Jugador" />
  </div>
)

Player.propTypes = {
  skin: PropTypes.string.isRequired,
}

export default Player
