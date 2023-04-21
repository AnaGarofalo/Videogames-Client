const calculatePages = (gamesPerPage, allGames) => {
  const pages = [];
  const totalPages = Math.ceil(allGames.length / gamesPerPage);
  for (let i = 1; i < totalPages + 1; i++) {
    pages.push(i);
  }
  return pages;
};

export default calculatePages;
