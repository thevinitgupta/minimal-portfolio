const { Redis } = require("@upstash/redis")

export const redis = new Redis({
    url: process.env.UPSTASH_URL,
    token: process.env.UPSTASH_API_KEY,
});

