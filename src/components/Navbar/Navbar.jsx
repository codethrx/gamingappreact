import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiJoystick } from "react-icons/bi";
import {
  searchGameAction,
  clearSearchGameAction,
} from "../../redux/SearchGame/searchGameAction";
import { useDispatch } from "react-redux";
function Navbar() {
  const [searchedGame, setSearchedGame] = useState("");
  const dispatch = useDispatch();
  return (
    <StyledNav>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="logo"
        onClick={() => {
          dispatch(clearSearchGameAction());
        }}
      >
        Fire <BiJoystick />
      </h1>
      <div className="nav-sequencer">
        <input
          type="text"
          placeholder="Search Game"
          value={searchedGame}
          onChange={(e) => {
            setSearchedGame(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            dispatch(searchGameAction(searchedGame));
            setSearchedGame("");
          }}
        >
          Search
        </button>
      </div>
    </StyledNav>
  );
}
const StyledNav = styled(motion.nav)`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  min-height: 20vh;
  .nav-sequencer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    padding: 1rem 0rem;
    font-size: 2.7rem;
    padding-right: 1rem;
  }
  input {
    width: 30%;
    padding: 0.4rem 0.5rem;

    font-size: 1.5rem;
    font-weight: normal;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.5);
  }
  button {
    background: #333;

    color: white;
    border: none;
    outline: none;
    padding: 0.4rem 0.5rem;
    cursor: pointer;
    font-size: 1.7rem;
  }
  #logo {
    font-family: "Staatliches", cursive;
    font-size: 4rem;
  }
`;
export default Navbar;
