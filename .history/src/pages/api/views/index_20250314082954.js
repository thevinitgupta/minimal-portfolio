import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/helpers/redis";

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

        // Hash the IP for deduplication
        const hash = createHash("sha256").update(ip).digest("hex");

        // Check if the IP has already been counted in the last 24 hours
        const isNew = await redis.set(`deduplicate:${hash}`, "true", "NX", "EX", 86400);
        if (!isNew) {
            return res.status(202).end(); // Return early if IP already counted
        }

        // Increment the pageview count
        await redis.incr("pageviews:projects");

        return res.status(202).end();
    }
    else if (req.method === "GET") {

    }
    return NextResponse.error("Method not allowed", 405);
}