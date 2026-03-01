import React, { createContext, useState, useEffect, useCallback } from "react";
import { UserContextType } from "../types/app.types";

type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
} | null;

type NavigationProp = {
  navigate: (screen: string) => void;
};

const initialUser: User = null;

export const UserContext = createContext<UserContextType>({
  user: initialUser,
  setUser: () => {},
  logout: async (navigation?: NavigationProp) => {},
  loading: true,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(initialUser);
  const [loading, setLoading] = useState(true);

  // Set up auth state listener

  const logout = async (): Promise<void> => {
    try {
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
