import { NextResponse } from "next/server";

export function middleware(req) {
    const ip = req.headers.get("x-forwarded-for") || req.ip;
    const path = req.nextUrl.pathname;

    fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/track-visit`, {
        method: "POST",
        body: JSON.stringify({ ip, path }),
        headers: { "Content-Type": "application/json" },
    }).catch((err) => console.error("Tracking error:", err));

    return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
    matcher: "/:path*",
};
