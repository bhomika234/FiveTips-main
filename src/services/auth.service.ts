import {
  IUser,
  SignUpData,
  UpdateProfileData,
  AuthResponse,
} from "../utils/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Platform } from "react-native";
import { supabase } from "../utils/supabase";

export const authService = {
  //  * Creates a user profile in the database
  async createUserProfile(userId: string, email: string): Promise<void> {
    try {
      const userData = {
        id: userId,
        email: email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_trial_active: true,
        subscription_status: "trial",
        trial_ends_at: new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ).toISOString(),
      };

      const { error: insertError } = await supabase
        .from("users")
        .insert(userData);

      if (insertError) {
        console.error("Failed to create user profile:", insertError);
      } else {
        console.log("User profile created successfully");
      }
    } catch (error) {
      console.error("Error in createUserProfile:", error);
    }
  },

  // Authentication Methods
  async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      // Validate email format
      if (!email || !email.includes("@")) {
        throw new Error("Please enter a valid email address");
      }

      // Validate password is not empty
      if (!password || password.length === 0) {
        throw new Error("Please enter your password");
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        // Handle specific Supabase auth errors
        if (error.message.includes("Invalid login credentials")) {
          throw new Error(
            "The email or password you entered is incorrect. Please try again."
          );
        } else if (error.message.includes("Email not confirmed")) {
          throw new Error(
            "Please verify your email before signing in. Check your inbox for the verification link."
          );
        } else if (error.message.includes("too many requests")) {
          throw new Error(
            "Too many login attempts. Please wait a few minutes and try again."
          );
        } else if (error.message.includes("email not found")) {
          throw new Error(
            "No account found with this email. Please check and try again."
          );
        } else if (error.message.includes("network request failed")) {
          throw new Error(
            "Network error. Please check your internet connection and try again."
          );
        } else {
          throw new Error(
            "An unexpected error occurred during sign in. Please try again later."
          );
        }
      }

      if (!data.session || !data.user) {
        throw new Error("Authentication failed. Please try again.");
      }

      // Get additional user data from profiles table
      const { data: profileData, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("id", data.user.id)
        .single();

      if (profileError) {
        console.warn("Profile data not found, continuing with basic user data");
      }

      const user = {
        id: data.user.id,
        email: data.user.email || "",
        email_verified: data.user.email_confirmed_at !== null,
        firstName: profileData?.first_name || "",
        lastName: profileData?.last_name || "",
        ...profileData,
      };

      return { user, session: data.session, error: null };
    } catch (error: any) {
      console.error("Auth Service: Sign in failed:", error);
      // Return a more user-friendly error message
      const friendlyError =
        error instanceof Error ? error : new Error(String(error));
      return { user: null, session: null, error: friendlyError };
    }
  },

  async signUp(
    signUpData: SignUpData
  ): Promise<{ success: boolean; user: any }> {
    try {
      // Create user in Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email: signUpData.email,
          password: signUpData.password,
        }
      );

      if (signUpError || !authData?.user) {
        console.error("Auth signup error:", signUpError);
        throw new Error(signUpError?.message || "User creation failed");
      }
      const userId = authData.user.id;
      // Create user profile in the database
      await this.createUserProfile(userId, signUpData.email);
      return { success: true, user: authData.user };
    } catch (error: any) {
      console.error("❌ Sign up failed:", error);
      throw error;
    }
  },

  async signOut(): Promise<{ error: Error | null }> {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error("Auth Service: Sign out failed:", error);
      return { error };
    }
  },

  async resetPassword(
    email: string
  ): Promise<{ success: boolean; error: Error | null }> {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.EXPO_PUBLIC_APP_URL}/reset-password`,
      });

      if (error) {
        console.error("Auth Service: Password reset failed:", error);
        return {
          success: false,
          error: new Error(
            error.message || "Failed to send password reset email"
          ),
        };
      }

      return { success: true, error: null };
    } catch (error: any) {
      console.error("Auth Service: Password reset error:", error);
      return {
        success: false,
        error: new Error(
          error.message || "An error occurred while processing your request"
        ),
      };
    }
  },

  async updatePassword(newPassword: string): Promise<{ error: Error | null }> {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error("Auth Service: Update password failed:", error);
      return { error };
    }
  },

  // Google Authentication
  async signInWithGoogle() {
    Alert.alert("Development Build Required");
  },

  // Profile picture upload is now handled by uploadProfilePicture method

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },
};
