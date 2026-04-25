import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseSecreteKey = process.env.SUPABASE_SECRET_KEY!;

// Create a client that uses the service role key — ONLY to be used in server/secure context
export const supabaseAdmin = createClient(supabaseUrl, supabaseSecreteKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
