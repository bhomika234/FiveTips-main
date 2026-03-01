import React, { createContext, useState, useEffect, useCallback } from "react";
import { UserContextType } from "../types/app.types";
import { supabase } from "../utils/supabase";

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

  // Function to get the current session and user
  const getSession = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) throw error;

      if (session?.user) {
        // Get additional user data if needed
        const userData = {
          id: session.user.id,
          email: session.user.email || "",
        };
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error getting session:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Set up auth state listener
  useEffect(() => {
    // Get initial session
    getSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const userData = {
          id: session.user.id,
          email: session.user.email || "",
        };
        setUser(userData);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [getSession]);

  const logout = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
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
