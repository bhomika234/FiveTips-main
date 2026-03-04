import { Splash } from "./auth/splash";
import { GettingStart } from "./auth/gettingstart";
import { Terms } from "./auth/terms";
import { Trial } from "./auth/trial";
import { ForgotPassword } from "./auth/forgotpassword";
import { CreateAccount } from "./auth/createaccount";
import { LoginScreen } from "./auth/login";
import { Payment } from "./auth/payment";
import { Home } from "./home";
import { History } from "./history";
import { Profile } from "./profile";
import Details from "./details";
import { ContactSupport } from "./contactsupport";
import { PrivacyPolicy } from "./privacypolicy";
import { TermsConditions } from "./termsconditions";
import { Subscription } from "./subscription";

// 1. LogoScreen ka import check karein
// Agar file ka naam 'LogoScreen.tsx' hai toh ye sahi hai
import { LogoScreen } from "./LogoScreen"; 

export {
  Splash,
  Splash as SplashScreen, // StackNavigator ke liye alias
  LogoScreen,
  GettingStart,
  Terms,
  Trial,
  ForgotPassword,
  CreateAccount,
  LoginScreen,
  Payment,
  Home,
  History,
  Profile,
  Details,
  ContactSupport,
  PrivacyPolicy,
  TermsConditions,
  Subscription,
};