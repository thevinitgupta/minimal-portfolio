import { rateLimiter } from "@/helpers/rateLimiter";

export async function middleware(req,res,next) {
    console.log("Middleware called!")
const ip = req.ip ?? '127.0.0.1';
    try {
        const { success } = await rateLimiter.limit('portfolio');
        if (!success) return res.status(403).json({
                text : 'Please wait for 5 seconds before sending the message',
                conversation : null
            });
        else next();
    }
    catch (error) {
        return res.status(500).json({
            text : 'Sorry, something went wrong processing your message',
            conversation : null
        });
    }
}
export const config = {
    matcher: '/api/message/:path*',
}