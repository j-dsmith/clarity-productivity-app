import { useContext, useEffect } from 'react';
import AnimationContext from '../store/animation-ctx';
import UserContext from '../store/user-ctx';

//* Fetch animation context
export const fetchContext = (contextType) => {
  if (contextType === 'animation') {
    const animationCtx = useContext(AnimationContext);
    return {
      trayOpenState: animationCtx.trayOpenState,
      toggleTrayOpenState: animationCtx.toggleTrayOpenState,
    };
  }
  if (contextType === 'user') {
    const userCtx = useContext(UserContext);
    return { user: userCtx.user, setUser: userCtx.setUser };
  }
};
