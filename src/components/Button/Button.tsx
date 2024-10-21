import { ButtonHTMLAttributes } from "react"

interface ButtonProps{
    title: string
    onclick?: ()=> void
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export default function Button({title, onclick, type} : ButtonProps){
    return(
        <button className="w-[300px] bg-[#44BBA4] h-[50px] rounded-md
        text-white text-[22px] hover:scale-[1.05] -tracking-tighter my-2 transition-transform" onClick={onclick} type={type}>
            {title}
        </button>
    )
}