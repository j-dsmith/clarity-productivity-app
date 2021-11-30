import { createContext } from 'react';
import { useCycle } from 'framer-motion';

const AnimationContext = createContext({
  trayOpenState: '',
  toggleTrayOpenState: function () {},
});

export const AnimationContextProvider = ({ children }) => {
  const [trayOpenState, cycleTrayOpenState] = useCycle('closed', 'open');

  function toggleTrayOpenState() {
    console.log(trayOpenState);
    cycleTrayOpenState();
  }

  const context = {
    trayOpenState,
    toggleTrayOpenState,
  };

  return (
    <AnimationContext.Provider value={context}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationContext;
