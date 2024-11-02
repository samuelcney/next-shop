import UserMenu from "../UserMenu/UserMenu";

export default function Header(){
    return(
        <div className="w-full h-[80px] border-b border-b-gray-300 flex items-center justify-between px-5">

            <div className="hover:scale-[1.05] transition-all">
                <i className="text-[50px] -tracking-tighter text-[#44BBA4]">Next</i>
            </div>

            <UserMenu />
        </div>
    )
}