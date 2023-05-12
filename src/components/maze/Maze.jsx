/* eslint-disable padded-blocks */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import style from "./Maze.module.css"

import Pared from "../Pared/Pared"
import Player from "../Player/Player"

const Maze = ({ json, w, h }) => {
  const skins = {
    0: [
      "/images/resources/skin1/playerUp.png",
      "/images/resources/skin1/playerRight.png",
      "/images/resources/skin1/playerDown.png",
      "/images/resources/skin1/playerLeft.png",
    ],
    1: [
      "/images/resources/skin2/playerUp.png",
      "/images/resources/skin2/playerRight.png",
      "/images/resources/skin2/playerDown.png",
      "/images/resources/skin2/playerLeft.png",
    ],
  }
  const [maze, setMaze] = useState(json)
  const [sprite, setSprite] = useState(skins[0][1])

  const movePlayer = (dx, dy) => {
    setMaze((oldMaze) => {
      const newMaze = [...oldMaze]

      let [x, y] = [null, null]
      let i = 0
      while (i < oldMaze.length) {
        const index = oldMaze[i].indexOf("p")
        if (index !== -1) {
          x = index
          y = i
          break
        }
        i += 1
      }

      if (newMaze[y + dy][x + dx] === " ") {
        newMaze[y][x] = " "
        newMaze[y + dy][x + dx] = "p"
      }

      if (newMaze[y + dy][x + dx] === "g") {
        // setWin(true)
      }
      return newMaze
    })
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setSprite(skins[0][0])
          movePlayer(0, -1)
          break
        case "ArrowDown":
          setSprite(skins[0][2])
          movePlayer(0, 1)
          break
        case "ArrowLeft":
          setSprite(skins[0][3])
          movePlayer(-1, 0)
          break
        case "ArrowRight":
          setSprite(skins[0][1])
          movePlayer(1, 0)
          break
        default:
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div
      className={style.maze}
      style={{
        gridTemplateColumns: `repeat(${w * 2 + w + 1}, 50px)`,
        gridTemplateRows: `repeat(${h + h + 1}, 50px)`,
        width: `${(w * 2 + w + 1) * 50}px`,
        height: `${(h + h + 1) * 50}px`,
      }}
    >
      {maze.map((row, ri) => row.map((col, ci) => {
        const key = `${ri}-${ci}`
        switch (col) {
          case "p":
            return <Player key={key} skin={sprite} />
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
