import styled from "styled-components";
import { motion } from "framer-motion";
const HomeStyles = styled(motion.div)`
  padding: 0rem 7rem;
  min-height: 90vh;

  h2 {
    padding: 6rem 0rem;
    font-family: "Abril Fatface", cursive;
    font-size: 3rem;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;
export { HomeStyles };
