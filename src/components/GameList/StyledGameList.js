import styled from "styled-components";
import { motion } from "framer-motion";
const GamesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 8rem;
  text-align: center;
`;
export { GamesGrid };
