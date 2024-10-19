import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const userId = parseInt(params.id, 10);
        console.log("ID recebido:", userId);

        if (isNaN(userId)) {
            return NextResponse.json({ message: "ID inválido." }, { status: 400 });
        }

        const user = await prisma.users.findUnique({
            where: { id: userId },
            select: { id: true, name: true, email: true },
        });

        if (!user) {
            console.log(`Usuário com ID ${userId} não encontrado.`);
            return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Erro ao buscar usuário:", error); 
        return NextResponse.json({ message: 'Erro ao buscar usuário.' }, { status: 500 });
    }
}