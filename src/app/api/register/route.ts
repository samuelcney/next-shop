import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import * as bcrypt from 'bcrypt'
import * as z from 'zod'

const UserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string()
})

export async function POST(request: Request){
    try{

        const body = await request.json()

        const {email, password, name} : {email: string, password: string, name: string} = UserSchema.parse(body)

        const userExist = await prisma.users.findUnique({where: {email}})
        const hashPassword = bcrypt.hashSync(password, 10)

        if(userExist){
            return NextResponse.json({message: 'O usuário já está cadastrado!'}, {status: 400})
        }

        const newUser = await prisma.users.create({
            data:{
                email,
                password: hashPassword,
                name
            }
        })

        return NextResponse.json({message: "Usuário cadastrado com sucesso!", newUser}, {status: 201})
    }   
    catch(error){
        if(error instanceof z.ZodError){

            const emailError = error.errors.find((err) => err.path.includes("email"))
            const passwordError = error.errors.find((err) => err.path.includes("password"))

            if(emailError){
                return NextResponse.json({message: "Email inválido!"}, {status: 400})
            }

            if(passwordError){
                return NextResponse.json({message: "A senha deve conter no mínimo 8 caracteres."}, {status: 400})
            }
            
            return NextResponse.json({message: 'Erro nos dados fornecidos.'}, {status: 400})
        }
        console.error("Erro:", error);
        return NextResponse.json({ message: "Erro ao criar usuário." }, { status: 500 })
    }
}