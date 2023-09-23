function addCharacterId(characters) {
  const characterObjects = characters.map((character, index) => {
    const id = index + 1;

    return {
      id: id,
      name: character.name
    };
  });

  return characterObjects;
}  

export default addCharacterId