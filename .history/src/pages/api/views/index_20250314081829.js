import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/helpers/redis";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { message, conversation } = req.body;
        let conversationObject = conversation;
        if (!conversation) {
        conversationObject = await redis.startChat();
        }
        const result = await conversationObject.sendMessage(message);
        const text = await result.response.text();
        return NextResponse.json({ text, conversation: conversationObject });
    }
    return NextResponse.error("Method not allowed", 405);
    }