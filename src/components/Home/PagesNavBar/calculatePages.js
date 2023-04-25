const calculatePages = (gamesPerPage, allGames) => {
  //*calcula la cantidad de páginas necesarias y crea un array con todos los números de página
  const pages = [];
  const totalPages = Math.ceil(allGames.length / gamesPerPage);
  for (let i = 1; i < totalPages + 1; i++) {
    pages.push(i);
  }
  return pages;
};

export default calculatePages;
