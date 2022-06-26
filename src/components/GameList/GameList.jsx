import React from "react";
import Game from "../Game/Game";
//styles
import { GamesGrid } from "./StyledGameList";
//react router
import { useParams } from "react-router-dom";
function GameList({ title, games }) {
  const { gameID } = useParams();
  const mappingGames = games.map(({ name, released, background_image, id }) => (
    <Game
      name={name}
      released={released}
      backgroundImage={background_image}
      id={id}
      key={id}
    />
  ));

  return (
    <section>
      <h2
        style={{
          fontFamily: `'Staatliches', cursive`,
          fontSize: "4rem",
          letterSpacing: "0.04rem",
        }}
      >
        {title}
      </h2>
      <GamesGrid>{mappingGames}</GamesGrid>
    </section>
  );
}

export default GameList;
