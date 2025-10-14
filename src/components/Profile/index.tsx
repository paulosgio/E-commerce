import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";


export default function Profile() {

    const name = localStorage.getItem("name")
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin") || "false")
    const navigate = useNavigate()

    const logOut = ()=> {
        localStorage.removeItem("token")
        localStorage.removeItem("isAdmin")
        localStorage.removeItem("name")
        navigate("/")
    }

    return(
        <div className="relative px-3 py-1 rounded-full bg-gray-200 group flex items-center">
                    <Avatar className="flex items-center gap-3">
                        <AvatarImage className="rounded-full w-8" src="https://github.com/shadcn.png" />
                        <AvatarFallback>User</AvatarFallback>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-sm font-medium">{name}</h3>
                            <h4 className="text-end text-xs font-normal text-slate-600">{isAdmin ? "Admin" : "User"}</h4>
                        </div>
                    </Avatar>
                <button onClick={logOut} className="cursor-pointer absolute left-[-50px] opacity-0 translate-x-2 bg-red-500 text-white text-sm px-3 py-2 rounded-xl transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
                    Sair
                </button>
            </div>
    )
}