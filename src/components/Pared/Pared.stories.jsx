import Pared from "./Pared"

export default {
  title: "Characters/Pared",
  component: Pared,
  tags: ["autodocs"],
  argTypes: {},
}

export const asVertical = {
  args: {
    skin: "/images/resources/wall.png",
    orientation: 0,
  },
}

export const asHorizontal = {
  args: {
    skin: "/images/resources/wall.png",
    orientation: 90,
  },
}

export const asCorner = {
  args: {
    skin: "/images/resources/cornerWall.png",
    orientation: 0,
  },
}
