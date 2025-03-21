import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/helpers/redis";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const body = await req.json();

    }
    else if(req.method === "GET")
    return NextResponse.error("Method not allowed", 405);
}