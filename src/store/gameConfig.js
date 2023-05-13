const gameConfig = (store) => {
  store.on("@init", () => ({
    gameConfig: {
      alto: "4",
      ancho: "4",
      time: "2",
      useTime: true,
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
}

export default gameConfig
