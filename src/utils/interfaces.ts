// IUser;

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStocks } from "./data";
import { ITipDisplay } from "../types/tips.types";

export type AppStackParamList = {
  GettingStart: undefined;
  Splash: undefined;
  Login: undefined;
  Terms: undefined;
  Trial: undefined;
  CreateAccount: undefined;
  Payment: undefined;
  ContactSupport: undefined;
  PrivacyPolicy: undefined;
  Subscription: undefined;
  TermsConditions: undefined;
  History: undefined;
  Profile: undefined;
  HelpSupport: undefined;
  Details: {
    stock?: IStocks;
    tip?: ITipDisplay;
  };
  Main: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type IRoutes = {
  name: keyof AppStackParamList;
  component: React.ComponentType<any>;
  title?: string;
  showHeader?: boolean;
};

export interface IUser {
  id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  profilepic?: string;
  phonenumber?: string;
  address?: string;
  email_verified?: boolean;
  created_at?: string;
  updated_at?: string;
  last_login?: string;
  is_trial_active?: boolean;
  trial_ends_at?: string;
  subscription_status?: "active" | "inactive" | "trial" | "cancelled";
}

export interface AuthResponse {
  user: IUser | null;
  session: any | null;
  error: Error | null;
}

export interface SignUpData {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  phonenumber?: string;
}

export interface UpdateProfileData {
  firstname?: string;
  lastname?: string;
  profilepic?: string;
  phonenumber?: string;
  address?: string;
}
