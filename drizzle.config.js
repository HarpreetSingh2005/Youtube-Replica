// drizzle.config.js
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/db/schema.js", // Point to your .js schema
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
