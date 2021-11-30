import { useContext } from 'react';
import AnimationContext from '../store/animation-ctx';

//* Fetch animation context
export const fetchContext = () => {
  const animationCtx = useContext(AnimationContext);
  return {
    trayOpenState: animationCtx.trayOpenState,
    toggleTrayOpenState: animationCtx.toggleTrayOpenState,
  };
};
