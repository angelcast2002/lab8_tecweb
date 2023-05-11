import React from "react"
import Maze from "./Maze"

export default {
  title: "Maze/Maze",
  component: Maze,
}

const Template = (args) => (
  <div style={{ padding: "20px" }}>
    <Maze {...args} />
  </div>

)

export const As2x2 = Template.bind({})
As2x2.args = {
  json: [["+", "-", "-", "+", "-", "-", "+"],
    ["|", "p", " ", " ", " ", " ", "|"],
    ["+", "-", "-", "+", " ", " ", "+"],
    ["|", " ", " ", " ", " ", "g", "|"],
    ["+", "-", "-", "+", "-", "-", "+"]],
  w: 2,
  h: 2,
}
