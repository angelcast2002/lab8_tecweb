import React, { useEffect, useState } from "react"
import style from "./Game.module.css"
import Maze from "../../components/maze/Maze"

const GamePage = () => {
  const [mazeLayout, setMazeLayout] = useState(null)
  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return response.json()
  }

  const loadMaze = async () => {
    setMazeLayout(await getMaze(4, 4))
  }

  useEffect(() => {
    loadMaze()
  }, [])

  if (!mazeLayout) {
    return "Loading..."
  }

  return (
    <div className={style.mazeContainer}>
      <Maze json={mazeLayout} w={4} h={4} />
    </div>
  )
}

export default GamePage
