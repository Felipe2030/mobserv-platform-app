import prisma from "@/src/lib/db";

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return Response.json({ message: "Success", users: users })
    } catch (error) {
        return Response.json({ message: "Error", error: error, status: 500 })
    }
}

export async function POST(request) {
    const { email, name } = await request.json();
    
    try {
        console.log(email,name)
        return Response.json({ message: "Success" })
    } catch (error) {
        return Response.json({ message: "Error", error: error, status: 500 })
    }
}