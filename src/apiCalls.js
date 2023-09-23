const getCharacters = async () => {
  let pageNum = 1
  
  const res = await fetch(`https://swapi.dev/api/people/?page=${pageNum}`)
  if (!res.ok) {
    throw new Error (`${res.status}: Unable to retrieve from server`)
  }
  const data = await res.json()
  return data
}

const getSpecificCharacter = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`)
  if (!res.ok) {
    throw new Error (`${res.status}: Unable to retrieve from server`)
  }
  const data = await res.json()
  return data
}

export {
  getCharacters,
  getSpecificCharacter
}