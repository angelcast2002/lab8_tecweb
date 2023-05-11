import InputPill from "./InputPill"

export default {
  title: "Inputs/IpuntPill",
  component: InputPill,
  tags: ["autodocs"],
  argTypes: {},
}

export const AsDefault = {
  args: {
    opciones: [
      { value: "1", label: "Tema 1" },
      { value: "2", label: "Tema 2" },
      { value: "3", label: "Tema 3" },
    ],
  },
}
