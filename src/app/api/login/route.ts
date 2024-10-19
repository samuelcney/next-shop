import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export async function POST(request: Request){
    try{

        const body = await request.json()

        const {email, password} = body

        const user = await prisma.users.findUnique({where: {email}})

        if(!user){
            return NextResponse.json({message: 'Credenciais inválidas.'}, {status: 400})
        }

        const compareHash = bcrypt.compareSync(password, user.password)
        if(!compareHash){
            return NextResponse.json({message: 'Credenciais inválidas.'}, {status: 401})
        }

        const token = jwt.sign({userId: user.id}, process.env.SECRET as string, {expiresIn: '1h'})
        return NextResponse.json({success: true, token})
    }   
    catch(error){
        console.log(error)
        return NextResponse.json({message: "Erro no servidor"}, {status: 500})
    }
}