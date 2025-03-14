import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/helpers/redis";
import {}

export default async function handler(req, res) {
    if (req.method === "POST") {
        // const body = await req.json();
        // const path = body.path;

        // if (!path) {
        //     return NextResponse.error("Path not provided", 400);
        // }

        const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        if (!ip) {
            return res.status(400).json({ error: "Unable to determine IP address" });
        }

        const hash = createHash("sha256").update(ip).digest("hex");

        // Check if the IP has already been counted in the last 24 hours
        const isNew = await redis.set(`deduplicate:${hash}`, "true", "NX", "EX", 86400);
        if (!isNew) {
            return res.status(202).end(); // Return early if IP already counted
        }

        // Increment the pageview count
        await redis.incr("pageviews:site");

        return res.status(202).end();
    }
    else if (req.method === "GET") {
        try {
            // Fix: Get the correct IP
            const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
            if (ip === "unknown") {
                return res.status(400).json({ error: "Unable to determine IP address" });
            }

            // Fix: Create a secure hash of the IP to prevent duplicates
            const hash = createHash("sha256").update(ip).digest("hex");

            // Check if the IP has already been counted in the last 24 hours
            const isNew = await redis.set(`deduplicate:${hash}`, "true", "NX", "EX", 86400);

            if (isNew) {
                // Only increment the pageview count if IP is new
                await redis.incr("pageviews:site");
            }

            // Fetch total pageviews safely
            let pageviews = await redis.get("pageviews:site");
            pageviews = pageviews ? parseInt(pageviews) : 100; // Default to 100 if Redis fails

            console.log("redis page views:", pageviews);

            return res.status(200).json({ pageviews });
        } catch (error) {
            console.error("Error fetching pageviews:", error);
            return res.status(500).json({ error: "Internal Server Error : "+error.message });
        }
    }
    return NextResponse.error("Method not allowed", 405);
}