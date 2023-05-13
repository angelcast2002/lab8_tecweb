import React, { useEffect, useState } from "react"
import { useStoreon } from "storeon/react"
import style from "./Game.module.css"
import Maze from "../../components/maze/Maze"

const GamePage = () => {
  const { gameConfig } = useStoreon("gameConfig")
  const [mazeLayout, setMazeLayout] = useState(null)
  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return response.json()
  }

  const loadMaze = async () => {
    setMazeLayout(await getMaze(parseInt(gameConfig.ancho, 10), parseInt(gameConfig.alto, 10)))
  }

  useEffect(() => {
    loadMaze()
  }, [])

  if (!mazeLayout) {
    return "Loading..."
  }

  return (
    <div className={style.mazeContainer}>
      <Maze json={mazeLayout} w={parseInt(gameConfig.ancho, 10)} h={parseInt(gameConfig.alto, 10)} />
    </div>
  )
}

export default GamePage
