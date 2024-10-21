"use client";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import SwitchMethod from "@/components/SwitchMethod/SwitchMethod";
import { useState } from "react";

export default function Home() {
  const [method, setMethod] = useState<boolean>(false);

  return (
    <div className="relative flex w-full h-[100dvh] overflow-hidden">
    
      <div
        className={`flex justify-center items-center bg-[#44BBA4] h-full w-[50%] transition-transform duration-450 ease-in-out z-20 ${
          method ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <i className="text-[182px] -tracking-tighter text-white hover:scale-[1.1] transition-all">Next</i>
      </div>

      
      <div
        className={`flex justify-center items-center h-full w-[50%] flex-col bg-gray-100 transition-transform duration-450 ease-in-out ${
          method ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {!method ? (
          <>
            <Login />
            <SwitchMethod
              label="Ainda não possui sua conta? Clique aqui."
              onclick={() => setMethod(!method)}
            />
          </>
        ) : (
          <>
            <Register />
            <SwitchMethod
              label="Já possui uma conta? Faça o seu login."
              onclick={() => setMethod(!method)}
            />
          </>
        )}
      </div>
    </div>
  );
}
