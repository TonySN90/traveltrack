import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qdhzguxtjagkqyfhzres.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaHpndXh0amFna3F5Zmh6cmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2NTMyODksImV4cCI6MjAyMjIyOTI4OX0.dtMTwVNIHFvOe14Sw0kSlkaV26HwKUUeZFjK-OoXqWI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
