import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DashContainer = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    'cal cal cal cal cal fore fore fore'
    'cal cal cal cal cal  fore fore fore'
    'cal cal cal cal cal fore fore fore'
    'cal cal cal cal cal fore fore fore'
    'task task task task stat stat stat stat'
    'task task task task stat stat stat stat'
    'task task task task stat stat stat stat'
    'task task task task stat stat stat stat';
  height: 100%;
  width: 100%;
`;
