const gameConfig = (store) => {
  store.on("@init", () => ({
    gameConfig: {
      alto: "4",
      ancho: "4",
      time: "",
      useTime: false,
      skin: "0",
      tema: "0",
    },
  }))
  store.on("setConfig", (_, {
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
