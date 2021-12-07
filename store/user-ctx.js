import { createContext, useState } from 'react';

const UserContext = createContext({
  user: {},
  setUser: function () {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const context = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
