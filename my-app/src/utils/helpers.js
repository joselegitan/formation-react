export function wait(sec) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), sec * 1000)
  })
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
