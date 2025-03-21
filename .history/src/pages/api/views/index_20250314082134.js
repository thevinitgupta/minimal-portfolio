import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/helpers/redis";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const body = await req.json();
        const path = body.path;

        if (!path) {
            return NextResponse.error("Path not provided", 400);
        }

        const ip = req.ip;
        
        const buf = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ip));
        const hash = Array.from(new Uint8Array)
    }
    else if(req.method === "GET"){

    }
    return NextResponse.error("Method not allowed", 405);
}