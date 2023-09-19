function getCharacters() {
  return fetch('https://swapi.dev/api/people/')
  .then(res => {
    if (!res.ok) {
      throw new Error (`${res.status}: Unable to retrieve from server`)
    }
    return res.json()
  })
}

export {
  getCharacters
}