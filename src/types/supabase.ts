export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

type UUID = string;
type Timestamp = string;

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          is_trial_active: boolean;
          subscription_status: "trial" | "active" | "expired" | "cancelled";
          trial_ends_at: Timestamp | null;
          created_at: Timestamp;
          updated_at: Timestamp | null;
        };
        Insert: {
          id?: string;
          email: string;
          is_trial_active?: boolean;
          subscription_status?: "trial" | "active" | "expired" | "cancelled";
          trial_ends_at?: Timestamp | null;
          created_at?: Timestamp;
          updated_at?: Timestamp | null;
        };
        Update: {
          id?: string;
          email?: string;
          is_trial_active?: boolean;
          subscription_status?: "trial" | "active" | "expired" | "cancelled";
          trial_ends_at?: Timestamp | null;
          updated_at?: Timestamp;
        };
        Relationships: [];
      };
    };
  };
}
