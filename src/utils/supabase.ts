import "react-native-url-polyfill/auto";
import { decode } from "base64-arraybuffer";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createClient } from "@supabase/supabase-js";
import { IUser } from "./interfaces";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config";
import { Database } from "../types/supabase";
export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

export const getLoggedInUser = async (): Promise<IUser | null | undefined> => {
  const { data, error } = await supabase.auth.getUser();

  if (error) return;

  const user = await supabase
    .from("users")
    .select("*")
    .eq("id", data.user?.id)
    .single();
  return user.data as any;
};



