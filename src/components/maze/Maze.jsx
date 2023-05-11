import React from "react"
import PropTypes from "prop-types"
import style from "./Maze.module.css"
import imgPared from "/images/resources/wall.png"
import imgPlayer from "/images/svg/dummySkin.svg"
import imgCorner from "/images/resources/cornerWall.png"

import Pared from "../Pared/Pared"
import Player from "../Player/Player"

const Maze = ({ json, w, h }) => {
  console.log(json)
  return (
    <div
      className={style.maze}
      style={{
        gridTemplateColumns: `repeat((${w} * 2) + ${w} + 1, 50px)`,
        gridTemplateRows: `repeat(${h} + ${h} + 1, 50px)`,
        width: `${(w * 2) + w + 1}px`,
        height: `${h + h + 1}px`,
      }}
    >
      {json.map((row) => row.map((col) => {
        const key = `${row}-${col}`
        switch (col) {
          case "p":
            return <Player key={key} skin={imgPlayer} />
          case "g":
            return <Pared key={key} skin={imgPared} orientation={175} />
          case "-":
            return <Pared key={key} skin={imgPared} orientation={0} />
          case "|":
            return <Pared key={key} skin={imgPared} orientation={90} />
          case "+":
            return <Pared key={key} skin={imgCorner} orientation={0} />
          default:
        }
        return null
      }))}
    </div>
  )
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
}

export default Maze
