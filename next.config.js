module.exports = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    NEXT_PUBLIC_OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    NEXTAUTH_SECRET: process.env.OPENWEATHER_API_KEY,
    GUEST_EMAIL: process.env.GUEST_EMAIL,
    GUEST_PASSWORD: process.env.GUEST_PASSWORD,
  },
  images: {
    domains: ["openweathermap.org"],
  },
};
