import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/helpers/redis";

export default async function handler(req, res) {
    if (req.method === "POST") {
        // const body = await req.json();
        // const path = body.path;

        // if (!path) {
        //     return NextResponse.error("Path not provided", 400);
        // }

        const ip = req.ip;
        
        const buf = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ip));
        const hash = Array.from(new Uint8Array(buf))
        .map((b)=> b.toString(16).padStart(2, "0"))
        .join("");

        const isNew = await redis.set(["deduplicate", hash].join(":"), true, {
            nx: true,
            ex: 24 * 60 * 60,
          });
          if (!isNew) {
            new NextResponse(null, { status: 202 });
          }

          await redis.incr(["pageviews", "projects", slug].join(":"));
return new NextResponse(null, { status: 202 });
    }
    else if(req.method === "GET"){

    }
    return NextResponse.error("Method not allowed", 405);
}