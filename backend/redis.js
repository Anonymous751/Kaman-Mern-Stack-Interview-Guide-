import { createClient } from "redis";
import dotenv from "dotenv"
dotenv.config();

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    reconnectStrategy: false, // ⛔ stop retry spam
  },
});

redisClient.on("error", () => {
  // intentionally silent
});

redisClient.connect().catch(() => {
  console.warn("⚠️ Redis disabled (running without cache)");
});

export default redisClient;
