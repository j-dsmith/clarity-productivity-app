import { createContext, useState } from 'react';

const AnimationContext = createContext({
  trayOpen: false,
  toggleTrayOpen: function () {},
});

export const AnimationContextProvider = ({ children }) => {
  const [trayOpen, setTrayOpen] = useState(false);

  function toggleTrayOpen(status) {
    setTrayOpen(status);
  }

  const context = {
    trayOpen,
    toggleTrayOpen,
  };

  return (
    <AnimationContext.Provider value={context}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationContext;
