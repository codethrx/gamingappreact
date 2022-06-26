import { useEffect, useState } from "react";
//react router
import { useParams, useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  loadGameDetails,
  deleteGameDetails,
} from "../../redux/GemeDetailSlice/gameDetailsAction";
//styled components
import styled from "styled-components";
//framer motion
import { motion, AnimatePresence } from "framer-motion";
//stars for rating
import emptyStar from "../../assets/emptystar.svg";
import fullStar from "../../assets/fullstar.svg";
//platforms
import apple from "../../assets/apple.svg";
import gamepad from "../../assets/gamepad.svg";
import nintendo from "../../assets/nintendo.svg";
import playstation from "../../assets/playstation.svg";
import xbox from "../../assets/xbox.svg";
import steam from "../../assets/steam.svg";
function GameDetails() {
  const navigate = useNavigate();
  const gameDetail = useSelector((state) => state.gameDetail.gameDetails);
  const gameScreenshots = useSelector(
    (state) => state.gameDetail.gameScreenshots
  );
  const loadingStatus = useSelector((state) => state.gameDetail.loading);
  const { gameID } = useParams();
  const dispatch = useDispatch();
  const renderStars = () => {
    const ratings = Math.floor(gameDetail.rating);
    const starList = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= ratings) {
        starList.push(<img src={fullStar} alt={i} key={i} className="icons" />);
      } else {
        starList.push(
          <img src={emptyStar} alt={i} key={i} className="icons" />
        );
      }
    }
    return starList;
  };
  const renderPlatforms = (platformType) => {
    switch (platformType) {
      case "Playstation 4":
        return playstation;
      case "Nintendo Switch":
        return nintendo;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      default:
        return gamepad;
    }
  };

  const platforms = gameDetail?.platforms.map((p) => {
    if (p.platform.name.includes("Playstation")) {
      return "Playstation 4";
    }
    if (p.platform.name.includes("Xbox")) {
      return "Xbox One";
    }
    if (p.platform.name.includes("Nintendo")) {
      return "Nintendo Switch";
    }
    if (p.platform.name.includes("PC")) {
      return "PC";
    }
    return "Gamepad";
  });
  const uniquePlatforms = [...new Set(platforms)];

  useEffect(() => {
    // dispatch(deleteGameDetails());
    dispatch(loadGameDetails(gameID));
  }, [dispatch, gameID]);
  return (
    <div>
      <AnimatePresence>
        {gameID && gameDetail && (
          <CardShadow
            className="card-shadow"
            onClick={(e) => {
              if (e.target.classList.contains("card-shadow")) {
                dispatch(deleteGameDetails());
                document.body.style.overflowY = `scroll`;
                navigate("/");
              }
            }}
          >
            <CardBody>
              <CardHeader>
                <motion.h3 layoutId={`title${gameID.toString()}`}>
                  {gameDetail.name}
                </motion.h3>
                <h3>Platforms</h3>
              </CardHeader>
              <CardPlatforms>
                <CardRating>
                  <p>Rating-{gameDetail.rating}</p>

                  <div className="stars">{renderStars()}</div>
                </CardRating>
                <div className="platforms">
                  {uniquePlatforms.map((p) => (
                    <img
                      key={p}
                      src={renderPlatforms(p)}
                      alt={p}
                      className="gaming-icons"
                    />
                  ))}
                </div>
              </CardPlatforms>
              {/*  */}
              <div className="media">
                <motion.img
                  layoutId={`pic${gameID.toString()}`}
                  src={gameDetail.background_image}
                  alt={gameDetail.background_image}
                />
              </div>
              <div className="description">
                <p>{gameDetail.description_raw}</p>
              </div>
              <div className="images">
                {gameScreenshots.map((ss) => (
                  <img key={ss.id} alt={ss.id} src={ss.image} />
                ))}
              </div>
            </CardBody>
          </CardShadow>
        )}
      </AnimatePresence>
    </div>
  );
}
const CardShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: none;
  z-index: 99;
`;
const CardBody = styled(motion.div)`
  width: 90%;
  height: 98%;
  overflow-y: scroll;
  transform: translateY(10px);
  margin: auto;
  background: white;
  border-radius: 1rem;
  z-index: 200;
  scrollbar-color: #333 #ccc;
  scrollbar-width: thin;
  padding: 1rem 1rem 0rem 1rem;

  .icons,
  svg {
    width: 3rem;
    height: 3rem;
  }
  p {
    font-size: 1.34rem;
    padding: 2rem 2rem;
    line-height: 1.1;
  }
  .gaming-icons {
    width: 3rem;
    height: 3rem;
    margin-left: 2rem;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 60vh;
    display: block;
  }
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem 0 3rem;
  justify-content: space-between;
  h3 {
    font-family: "Abril Fatface", cursive;
    font-size: 3rem;
    color: #696969;
  }
`;
const CardPlatforms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0rem;
  padding: 1rem 3rem 0 3rem;
  .platforms {
    display: flex;
  }
`;
const CardRating = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.2rem 0rem;
  .stars {
    display: flex;
  }
  h4 {
    font-size: 1.5rem;
  }
`;
export default GameDetails;
