// userAuthentication hook that will return the user and isAuthenticated state.
import { useEffect, useState } from "react";
import { IUser } from "../utils/interfaces";

export const userAuthentication = (): {
  user: IUser | null;
  isAuthenticated: boolean;
} => {
  const [user, setUser] = useState<IUser | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      const user = "Suneel";
      if (user) {
        setUser(JSON.parse(user));
        setIsAuthenticated(true);
      }
    };
    getUser();
  }, []);

  return { user, isAuthenticated };
};
