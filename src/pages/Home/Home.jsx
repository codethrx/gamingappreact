import React, { useEffect } from "react";
//redux things
import { fetchGames } from "../../redux/GamesSlice/gameAction";
import { useSelector, useDispatch } from "react-redux/es/exports";
//importing components
import GameList from "../../components/GameList/GameList";
//styles
import { HomeStyles } from "./StyledHome";
//react router dom
import { Outlet } from "react-router-dom";
//framer motion
import { LayoutGroup } from "framer-motion";
function Home() {
  const dispatch = useDispatch();

  const { newGames, popularGames, upcomingGames } = useSelector(
    (state) => state.games
  );
  const { searched } = useSelector((state) => state.searchedGame);
  useEffect(() => {
    dispatch(fetchGames());
  }, []);
  return (
    <HomeStyles>
      <LayoutGroup type="crossfade">
        <Outlet />
        {searched && <GameList title="Searched Games" games={searched} />}
        <GameList title="Upcoming Games" games={upcomingGames} />
        <GameList title="Popular Games" games={popularGames} />
        <GameList title="New Games" games={newGames} />
      </LayoutGroup>
    </HomeStyles>
  );
}

export default Home;
