import Player from "./Player"

export default {
  title: "Characters/Player",
  component: Player,
  tags: ["autodocs"],
  argTypes: {},
}

export const AsUp = {
  args: {
    skin: "/images/resources/skin1/playerUp.png",
  },
}

export const AsDown = {
  args: {
    skin: "/images/resources/skin1/playerDown.png",
  },
}

export const AsRight = {
  args: {
    skin: "/images/resources/skin1/playerRight.png",
  },
}

export const AsLeft = {
  args: {
    skin: "/images/resources/skin1/playerLeft.png",
  },
}
