export const defaultUrl = 
  process.env.NEXT_PUBLIC_APP_URL ? 
  process.env.NEXT_PUBLIC_APP_URL :
  process.env.VERCEL_URL ? 
  `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const allowedOrigins = [
  "https://space.allschoolsupdate.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

export const baseUrl = {
  api: `${defaultUrl}/api`,
  app: defaultUrl,
}