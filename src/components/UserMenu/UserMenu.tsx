import { ChevronDown, ChevronUp, LogOut, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import { decode } from "jsonwebtoken";
import axios from "axios";
import OptionsMenu from "../OptionMenu/OptionMenu";

export default function UserMenu(){

    const [openMenu, setOpenMenu] = useState(false)

    const [user, setUser] = useState<{userId: number, name: string} | null>(null)

    const fetchUserData = async (userId: number) => {
        try {
            const response = await axios.get(`/api/user/${userId}`);
            setUser(response.data.user);
        } catch (error) {
            console.log('Erro ao buscar o usuário', error);
        }
    };

    useEffect(()=>{

        const token = localStorage.getItem('token')

        if(token){
            try{

                const decodeToken = decode(token, {json: true}) as {userId : number}
                fetchUserData(decodeToken?.userId)
            }
            catch(error){
                console.log("Token inválido ou expirado", error)
                localStorage.removeItem('token')
            }
        }
    }, [openMenu])

    return(
        <div className="flex justify-center">

            <div onClick={()=>{setOpenMenu(!openMenu)}} className="flex gap-3 items-center justify-center border-gray-500 border w-[152px] h-[50px] rounded-full hover:cursor-pointer hover:border-[#44BBA4]">

            <User2 size={20}/>
            <h1>{user ? <h1 className="text-[16px] text-ellipsis text-nowrap font-medium">{user?.name.split(" ")[0]}</h1> : '????'}</h1>

            {openMenu ? <ChevronUp /> : <ChevronDown />}
            </div>

            {openMenu ? <OptionsMenu /> : ''}
            
        </div>
    )
}