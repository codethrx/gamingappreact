import React from "react";

//styles
import { GameStyles } from "./StyledGame";
//react router dom
import { Link } from "react-router-dom";
//framer motion
import { motion } from "framer-motion";
function Game({ name, released, id, backgroundImage }) {
  return (
    <GameStyles
      animate={{ scale: 1, transition: { duration: 0 } }}
      initial={{ scale: 0 }}
      whileHover={{
        scale: 1.07,
        transition: { duration: 0.4 },
      }}
    >
      <Link to={`/games/${id}`}>
        <motion.h3 layoutId={`title${id.toString()}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`pic${id.toString()}`}
          src={backgroundImage}
          alt={backgroundImage}
        />
      </Link>
    </GameStyles>
  );
}

export default Game;
