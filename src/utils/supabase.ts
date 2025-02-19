import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dgdsspedxmlufmuukizl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnZHNzcGVkeG1sdWZtdXVraXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5OTQ4NzIsImV4cCI6MjA1NTU3MDg3Mn0.xYF6aU_-Kt8jfKDDRGYpgU00WiQ9JhIDwyJgrX5T_NU";
// TODO: Add process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey);
