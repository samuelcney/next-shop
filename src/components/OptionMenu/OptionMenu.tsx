import { LogOut, User2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OptionsMenu(){

    const router = useRouter()

    const navigateToProfile = ()=>{
        router.push('/profile')
    }

    const logout = ()=>{
        localStorage.removeItem("token")
        router.push('/')
    }

    const style = "flex p-2 hover:bg-[#ccc] bg-white hover:cursor-pointer"

    return(
        <div className="flex flex-col absolute border top-[70px] w-[140px]">
                <span className={style} onClick={navigateToProfile}>
                    <User2 size={20}/>
                    <h1 className="ml-2 font-medium">Minha conta</h1>
                </span>

                <span className={style} onClick={logout}>
                    <LogOut size={20}/>
                    <h1 className="ml-2 font-medium">Sair</h1>
                </span>
            </div>
    )
}