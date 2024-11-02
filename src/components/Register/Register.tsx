/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import axios from "axios";
import { AtSignIcon, Eye, EyeClosed, User2 } from "lucide-react";

import { useState } from "react";
import { Bounce, toast, ToastContainer, TypeOptions } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Register(){

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [hiddenPass, setHiddenPass] = useState<boolean>(false)

    const notify = (message:string, type:TypeOptions)=> toast(message, {type: type})

    const handleRegister = async()=>{

        try{
            if(name === '' || email === '' || password === '' || confirmPassword === ''){
                notify('Preencha todos os campos!', "error")
                return
            }

            if(password !== confirmPassword){
                notify('As senhas devem ser iguais.', "error")
                return
            }


            const response = await axios.post('/api/register', {name, email, password})

            if(response.status === 201){
                console.log(response.data)
                notify(response.data.message, "success")
            }
            
        }
        catch(error:any){
            console.log(error)
            notify(error.response.data.message, "error")
        }
    }

    return(
        <div className="w-full flex items-center flex-col gap-4">

          <h1 className="text-[34px] mb-2">Crie sua conta no <i className="text-[#44BBA4]">Next</i> !</h1>

            <div className="flex flex-col">
              <label className="mb-2 ml-1">Nome</label>
              <Input value={name} onchange={(e)=>setName(e.target.value)} icon={<User2 size={32}/>} name="name" />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 ml-1">Email</label>
              <Input value={email} onchange={(e)=>setEmail(e.target.value)} icon={<AtSignIcon size={32}/>} name="email" type="email"/>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 ml-1">Senha</label>
              <Input value={password} onchange={(e)=>setPassword(e.target.value)} icon={
                !hiddenPass ? <EyeClosed size={32} onClick={()=>{setHiddenPass(true)}}/> : <Eye size={32} onClick={()=>{setHiddenPass(false)}}/>
              } name="password" type={!hiddenPass ? "password" : ""}/>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 ml-1">Confirme sua senha</label>
              <Input value={confirmPassword} onchange={(e)=>setConfirmPassword(e.target.value)} name="confirmPassword" icon={
                !hiddenPass ? <EyeClosed size={32} onClick={()=>{setHiddenPass(true)}}/> : <Eye size={32} onClick={()=>{setHiddenPass(false)}}/>
              } type={!hiddenPass ? "password" : ""}/>
            </div>

            <Button title="Cadastrar" onclick={handleRegister}/>

            <ToastContainer autoClose={3000} position="bottom-left" pauseOnHover={false} transition={Bounce}/>
          </div>
    )
}