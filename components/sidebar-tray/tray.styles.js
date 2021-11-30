import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTray = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.gray700};
  width: 17%;
  height: 100vh;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;
