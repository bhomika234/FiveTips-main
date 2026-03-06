
import React, { createContext, useState, ReactNode } from "react";

type UserContextType = {
  user: boolean; 
  setUser: (user: boolean) => void;
};

export const UserContext = createContext<UserContextType>({
  user: false,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(false); 

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};