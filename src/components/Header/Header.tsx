import UserMenu from "../UserMenu/UserMenu";

export default function Header(){
    return(
        <div className="w-full h-[80px] border-b border-b-gray-300 flex items-center justify-end px-5">

            <UserMenu />
        </div>
    )
}