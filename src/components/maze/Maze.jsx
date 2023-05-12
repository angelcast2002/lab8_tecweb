import React from "react"
import PropTypes from "prop-types"
import style from "./Maze.module.css"

import Pared from "../Pared/Pared"
import Player from "../Player/Player"

const Maze = ({ json, w, h }) => (
  <div
    className={style.maze}
    style={{
      gridTemplateColumns: `repeat(${w * 2 + w + 1}, 50px)`,
      gridTemplateRows: `repeat(${h + h + 1}, 50px)`,
      width: `${((w * 2) + w + 1) * 50}px`,
      height: `${(h + h + 1) * 50}px`,
    }}
  >
    {
      json.map((row, ri) => row.map((col, ci) => {
        const key = `${ri}-${ci}`
        switch (col) {
          case "p":
            return <Player key={key} skin="/images/svg/dummySkin.svg" />
          case "g":
            return <Pared key={key} skin="/images/resources/win.png" orientation={0} />
          case "-":
            return <Pared key={key} skin="/images/resources/wall.png" orientation={0} />
          case "|":
            return <Pared key={key} skin="/images/resources/wall.png" orientation={90} />
          case "+":
            return <Pared key={key} skin="/images/resources/cornerWall.png" orientation={0} />
          case " ":
            return <Pared key={key} skin="/images/resources/way.png" orientation={0} />
          default:
        }
        return null
      }))
}
  </div>
)

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
}

export default Maze
