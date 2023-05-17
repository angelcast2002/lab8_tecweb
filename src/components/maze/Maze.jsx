import React, { useEffect, useState, useRef } from "react"
import { useStoreon } from "storeon/react"
// eslint-disable-next-line import/no-unresolved
import { navigate } from "@store"
import PropTypes from "prop-types"
import style from "./Maze.module.css"
import Button from "../button/Button"

import Pared from "../Pared/Pared"
import Player from "../Player/Player"

const Maze = ({ json, w, h }) => {
  const { gameConfig } = useStoreon("gameConfig")
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
    2: [
      "/images/resources/skin3/playerUp.png",
      "/images/resources/skin3/playerRight.png",
      "/images/resources/skin3/playerDown.png",
      "/images/resources/skin3/playerLeft.png",
    ],
  }
  const temas = {
    0: ["/images/resources/tema1/vWall.png", "/images/resources/tema1/hWall.png", "/images/resources/tema1/corner.png"],
    1: ["/images/resources/tema2/vWall.png", "/images/resources/tema2/hWall.png", "/images/resources/tema2/corner.png"],
    2: ["/images/resources/tema3/vWall.png", "/images/resources/tema3/hWall.png", "/images/resources/tema3/corner.png"],
  }
  const [maze, setMaze] = useState(json)
  const [sprite, setSprite] = useState(skins[parseInt(gameConfig.skin, 10)][1])
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)
  const [time, setTime] = useState(gameConfig.time)
  const interval = useRef(null)
  const keyListener = useRef(null)

  const timerToMinutesAndSeconds = () => {
    const minutos = Math.floor(time / 60)
    const segundosRestantes = time % 60
    return [minutos, segundosRestantes]
  }

  const timer = () => {
    setTime((oldTime) => {
      if (oldTime === 0) {
        setLose(true)
        clearInterval(interval.current)
        return 0
      }
      return oldTime - 1
    })
  }

  useEffect(() => {
    if (lose === true) {
      navigate("/gameover")
    }
  }, [lose])

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
        setWin(true)
      }
      return newMaze
    })
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setSprite(skins[gameConfig.skin][0])
          movePlayer(0, -1)
          break
        case "ArrowDown":
          setSprite(skins[gameConfig.skin][2])
          movePlayer(0, 1)
          break
        case "ArrowLeft":
          setSprite(skins[gameConfig.skin][3])
          movePlayer(-1, 0)
          break
        case "ArrowRight":
          setSprite(skins[gameConfig.skin][1])
          movePlayer(1, 0)
          break
        default:
      }
    }
    if (gameConfig.useTime === true && interval.current === null) {
      interval.current = setInterval(() => {
        timer()
      }, 1000)
    }
    if (keyListener.current === null) {
      keyListener.current = handleKeyDown
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      if (keyListener.current !== null) {
        document.removeEventListener("keydown", keyListener.current)
        keyListener.current = null
      }
    }
  }, [])

  const handleClick = () => {
    navigate("/")
  }

  const minutesSeconds = timerToMinutesAndSeconds()

  return (
    <div className={style.generalMazeContainer}>
      {gameConfig.useTime ? (
        <div className={style.timer}>
          <h1>{`${minutesSeconds[0]}:${minutesSeconds[1]}`}</h1>
        </div>
      ) : null}
      {!win ? (
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
                return <Pared key={key} skin={temas[parseInt(gameConfig.tema, 10)][0]} orientation={0} />
              case "|":
                return <Pared key={key} skin={temas[parseInt(gameConfig.tema, 10)][1]} orientation={0} />
              case "+":
                return <Pared key={key} skin={temas[parseInt(gameConfig.tema, 10)][2]} orientation={0} />
              case " ":
                return <Pared key={key} skin="/images/resources/way.png" orientation={0} />
              default:
                return null
            }
          }))}
        </div>
      ) : (
        <div className={style.menuContainer}>
          <div className={style.subOpcionContainer}>
            <h1>¡Ganaste!</h1>
            <Button label="Regresar al menu" backgroundColor="#fff" size="large" onClick={handleClick} />
          </div>
        </div>
      )}
    </div>
  )
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
}

export default Maze
