function getCharacters() {
  let pageNum = 1
  const characters = []

  // const fetchAllCharcters = () => {
    return fetch(`https://swapi.dev/api/people/?page=${pageNum}`)
    .then(res => {
      if (!res.ok) {
        throw new Error (`${res.status}: Unable to retrieve from server`)
      }
      return res.json()
    })
  //   .then(data => {
  //     characters.push(...data.results)
  //     if (data.next) {
  //       pageNum++
  //       return fetchAllCharcters()
  //     }
  //     return characters
  //   })
  // }
  // return fetchAllCharcters()
}

function getSpecificCharacter(id) {
  return fetch(`https://swapi.dev/api/people/${id}`)
  .then(res => {
    if (!res.ok) {
      throw new Error (`${res.status}: Unable to retrieve from server`)
    }
    return res.json()
  })
}

export {
  getCharacters,
  getSpecificCharacter
}