const getPageGames = (pageNumber, allGames, gamesPerPage) => {
  const lastGame = gamesPerPage * pageNumber;
  const firstGame = lastGame - gamesPerPage;
  const pageGames = allGames.slice(firstGame, lastGame);
  return pageGames;
};

export default getPageGames;
