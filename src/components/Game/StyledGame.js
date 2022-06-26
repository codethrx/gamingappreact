import styled from "styled-components";
import { motion } from "framer-motion";
const GameStyles = styled(motion.div)`
  height: 50vh;
  border-radius: 2rem;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;

  cursor: pointer;
  overflow: hidden;

  h3 {
    padding: 1rem 0rem;
    font-size: 1.5rem;
    color: #333;
    font-weight: 500;
    text-decoration: none;
  }
  p {
    padding: 0.5rem 0rem;
    font-size: 1.4rem;
    color: #696969;
    text-decoration: none;
  }
  img {
    width: 40vw;
    height: 50vh;
    object-fit: cover;
    display: block;
    transform: translateX(-50px);

    @media screen and (max-width: 1439px) {
      width: 70vw;
    }
    @media screen and (max-width: 989px) {
      width: 100%;
    }
  }
  a {
    text-decoration: none;
  }
`;
export { GameStyles };
