import Input from "./Input"

export default {
  title: "Inputs/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
}

export const asText = {
  args: {
    name: "username",
    type: "text",
    placeholder: "Ejemplo",
  },
}

export const asPassword = {
  args: {
    name: "password",
    type: "password",
    placeholder: "Ejemplo",
  },
}

export const asNumber = {
  args: {
    name: "number",
    type: "number",
    placeholder: "524",
  },
}

export const asCheckBox = {
  args: {
    type: "checkbox",
  },
}
