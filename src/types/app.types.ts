// Utility Imports for JSON type handling

import { IUser } from "../utils/interfaces";

// Login Types
export type ILogin = {
  email: string;
  password: string;
};

// Context Type for User and Community
export type UserContextType = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logout: () => Promise<void>;
  loading: boolean;
};
