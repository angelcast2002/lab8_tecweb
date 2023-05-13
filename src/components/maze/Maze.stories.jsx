/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { StoreContext } from "storeon/react"
// eslint-disable-next-line import/no-unresolved
import store from "@store"
import Maze from "./Maze"

export default {
  title: "Maze/Maze",
  component: Maze,
}

const Template = (args) => (
  <StoreContext.Provider value={store}>
    <div style={{ padding: "20px" }}>
      <Maze {...args} />
    </div>
  </StoreContext.Provider>
)

export const As2x2 = Template.bind({})
As2x2.args = {
  json: [
    ["+", "-", "-", "+", "-", "-", "+"],
    ["|", "p", " ", " ", " ", " ", "|"],
    ["+", "-", "-", "+", " ", " ", "+"],
    ["|", " ", " ", " ", " ", "g", "|"],
    ["+", "-", "-", "+", "-", "-", "+"],
  ],
  w: 2,
  h: 2,
}

export const As4x4 = Template.bind({})
As4x4.args = {
  json: [
    ["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"],
    ["|", "p", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["+", " ", " ", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+"],
    ["|", " ", " ", " ", " ", " ", "|", " ", " ", "|", " ", " ", "|"],
    ["+", "-", "-", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+"],
    ["|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|"],
    ["+", " ", " ", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"],
    ["|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "g", "|"],
    ["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"],
  ],
  w: 4,
  h: 4,
}
