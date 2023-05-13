import React, { useEffect, useState } from "react"
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
  const [useTimer] = useState(gameConfig.useTime)
  const [lose, setLose] = useState(false)
  const [time, setTime] = useState([0, 0])
  const [contar, setContar] = useState(false)

  const timer = () => {
    if (time[0] > 0 || time[1] > 0) {
      if (time[1] === 0) {
        setTime([time[0] - 1, 59])
      } else {
        setTime([time[0], time[1] - 1])
      }
    } else {
      setLose(true)
    }
  }
  useEffect(() => console.log("useEffect", time), [time])
  const formatTime = (mins) => {
    const hours = Math.floor(mins / 60)
    const minutes = mins % 60
    const seconds = (mins - hours * 60 - minutes) * 60
    setTime([minutes, seconds])
  }

  useEffect(() => {
    formatTime(parseInt(gameConfig.time, 10))
  }, [])

  useEffect(() => {
    setContar(true)
  }, [])

  useEffect(() => {
    if (contar === true) {
      if (useTimer === true) {
        setInterval(() => {
          timer()
        }, 1000)
      }
    }
  }, [contar])

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
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleClick = () => {
    navigate("/")
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    scrollToTop()
  }, [win])

  return (
    <div className={style.generalMazeContainer}>
      {useTimer ? (
        <div className={style.timer}>
          <h1>{`${time[0]}:${time[1]}`}</h1>
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
