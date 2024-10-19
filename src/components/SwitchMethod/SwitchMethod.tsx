
interface switchInterface{
    label: string,
    onclick: ()=>void
}

export default function SwitchMethod({label, onclick} : switchInterface){
    return(
        <a className="text-[14px] hover:underline decoration-[#44BBA4] hover:cursor-pointer" onClick={onclick}>
            {label}
        </a>
    )
}