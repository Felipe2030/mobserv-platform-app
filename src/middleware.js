import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/authMiddleware";
import { logMiddleware } from "./middlewares/logMiddleware";

export const config = {
    matcher: "/api/:path*"
}

export default function middleware(request) {
    const logResult  = logMiddleware(request);
    console.log(logResult);
    
    const authResult = authMiddleware(request);
    if (!authResult?.isValid) return new NextResponse(JSON.stringify({ message: "Unauthorized" }),{ status: 401 });
    return NextResponse.next();
}