import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DashContainer = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 1rem;
  grid-template-areas:
    'calendar calendar forecast forecast'
    'calendar calendar forecast forecast'
    'tasks tasks stats stats'
    'tasks tasks stats stats';
  padding: 1rem;
  height: 100%;
  width: 100%;
`;
