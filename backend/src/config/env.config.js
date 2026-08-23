import dotenv from "dotenv";

dotenv.config();

const requiredEnv = ["DATABASE_URL", "CORS_ORIGIN"];

for (const env of requiredEnv) {
  if (!process.env[env]) {
    throw new Error(`Missing required environment variable: ${env}`);
  }
}

export const config = {
  port: process.env.PORT || 8000,
  dbUrl: process.env.DATABASE_URL,
  corsOrigin: process.env.CORS_ORIGIN,
};
