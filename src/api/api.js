const KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.rawg.io/api`;
//Month
const getMonth = () =>
  new Date().getMonth() < 10
    ? `0${new Date().getMonth() + 1}`
    : new Date().getMonth() + 1;
const getYear = new Date().getFullYear();
const getDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};
//Current year , last year , next year
const currentYear = getYear;
const currentDay = getDay();
const currentMonth = getMonth();
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const currentYearDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//URL
const popularGames = `/games?key=${KEY}&dates=${lastYearDate},${currentYearDate}&ordering=-added&page_size=11`;
const newGames = `/games?key=${KEY}&dates=${lastYearDate},${currentYearDate}&ordering=-released&page_size=8`;
const upcomingGames = `/games?key=${KEY}&dates=${currentYearDate},${nextYearDate}&ordering=-added&page_size=11`;
//exporting URL generator functions
export const popularGamesURL = () => `${BASE_URL}${popularGames}`;
export const newGamesURL = () => `${BASE_URL}${newGames}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcomingGames}`;
export const gameDetailURL = (id) => `${BASE_URL}/games/${id}?key=${KEY}`;
export const gameScreenshoteURL = (id) =>
  `${BASE_URL}/games/${id}/screenshots?key=${KEY}`;
export const searchGameURL = (name) => {
  const slug = name.split(" ").join("-").toLowerCase();
  return `${BASE_URL}/games?key=${KEY}&search=${slug}&page_size=7`;
};
