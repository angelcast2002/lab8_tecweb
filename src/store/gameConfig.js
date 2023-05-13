const gameConfig = (store) => {
  store.on("@init", () => ({
    gameConfig: {
      alto: "4",
      ancho: "4",
      time: "0",
      useTime: false,
      skin: "0",
      tema: "0",
    },
  }))
  store.on("gameConfig/set", (_, {
    alto, ancho, time, useTime, skin, tema,
  }) => ({
    gameConfig: {
      alto,
      ancho,
      time,
      useTime,
      skin,
      tema,
    },
  }))
  store.on("gameConfig/reset", () => ({
    gameConfig: {
      alto: "4",
      ancho: "4",
      time: "0",
      useTime: false,
      skin: "0",
      tema: "0",
    },
  }))
}

export default gameConfig
