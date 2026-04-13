// Configuration for Confessional Booth
export const config = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },
  mux: {
    publicToken: process.env.NEXT_PUBLIC_MUX_TOKEN_ID || "",
    tokenSecret: process.env.MUX_TOKEN_SECRET || "",
  },
  stripe: {
    publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "",
    secretKey: process.env.STRIPE_SECRET_KEY || "",
  },
  suno: {
    apiKey: process.env.SUNO_API_KEY || "",
  },
};
