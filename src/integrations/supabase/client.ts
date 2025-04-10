import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://pzuhnijwomkpqjwolard.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6dWhuaWp3b21rcHFqd29sYXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTE1MjgsImV4cCI6MjA1OTc4NzUyOH0.XIX4OzK7cmhU8Eu6WgLP7opETotz9CbS6TDubXDLTak";

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      storage: localStorage,
      autoRefreshToken: true,
    },
  }
);
