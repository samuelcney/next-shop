"use client"
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import SwitchMethod from "@/components/SwitchMethod/SwitchMethod";
import { useState } from "react";

export default function Home() {

    const [method, setMethod] = useState<boolean>(false)

  return (
    <div className={`flex w-full h-[100dvh] ${!method ? "" : "flex-row-reverse"}`}>
        
        <div className="flex justify-center items-center bg-[#44BBA4] h-full w-[52%]">
          <i className="text-[182px] -tracking-tighter text-[white]">Next</i>
        </div>

        <div className="flex justify-center items-center h-full w-[48%] flex-col">

        {!method ? <Login /> : <Register />}
        
        {!method ? <SwitchMethod label="Ainda não possui sua conta? Clique aqui." onclick={()=>setMethod(!method)}/> :  <SwitchMethod label="Já possui uma conta? Faça o seu login." onclick={()=>setMethod(!method)}/>}
        
        </div>

    </div>
  );
}
