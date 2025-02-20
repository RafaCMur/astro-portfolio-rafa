import { createClient } from "@supabase/supabase-js";

if (!import.meta.env.SUPABASE_URL || !import.meta.env.SUPABASE_KEY) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL as string,
  import.meta.env.PUBLIC_SUPABASE_KEY as string,
);
