import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import axios from "axios";
import { AtSignIcon, Eye, EyeClosed, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer, Bounce, TypeOptions } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Login(){

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [hiddenPass, setHiddenPass] = useState<boolean>(false)

    const router = useRouter()

    const notify = (message: string, type:TypeOptions) => toast(message)

    const onSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      try{

        if(email === '' || password === ''){
          notify('Preencha todos os campos!', 'error')
          return
        }

        const response = await axios.post('/api/login', {email, password})

        if(response.status === 200 && response.data.success){
          localStorage.setItem('token', response.data.token)
          router.push('/products')
        }
      }
      catch(error:any){
        console.log(error)
        notify(error.response.data.message, "error")
      }
    }

    return(
        <div className="w-full flex items-center flex-col gap-4">

        <h1 className="text-[34px] mb-2">Seja bem vindo ao <i className="text-[#44BBA4]">Next</i> !</h1>

        <form onSubmit={onSubmit} className="flex flex-col items-center">
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

            <Button title="Entrar" type="submit" />
          </form>
          
          <ToastContainer autoClose={3000} position="bottom-right" pauseOnHover={false} transition={Bounce}/>
        </div>
    )
}