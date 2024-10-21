import { ReactNode } from "react"

interface InputProps{
    name: string
    value: string
    placeholder?: string
    onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    icon?: ReactNode
    type?: string
}

export default function Input({onchange, value, placeholder, icon, name, type}: InputProps){
    return(
        <div className="w-[440px] h-[55px] flex rounded-md mb-5 border-gray-300 border bg-white items-center p-4">
        <input className="w-full h-full focus:outline-none"
        value={value} placeholder={placeholder} onChange={onchange} type={type} name={name}/>
        {   icon ? icon : ''}
        </div>
    )
}