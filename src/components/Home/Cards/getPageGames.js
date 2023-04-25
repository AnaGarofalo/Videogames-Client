const getPageGames = (pageNumber, allGames, gamesPerPage) => {
  //* hace los cálculos para seleccionar qué juegos mostrar según el número de página
  const lastGame = gamesPerPage * pageNumber;
  const firstGame = lastGame - gamesPerPage;
  const pageGames = allGames.slice(firstGame, lastGame);
  return pageGames;
};

export default getPageGames;
