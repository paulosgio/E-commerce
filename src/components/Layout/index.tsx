import { Outlet, useNavigate } from "react-router-dom";
import Profile from "../Profile";
import { Toaster } from "sonner";

export default function Layout() {

    const navigate = useNavigate()

    return(
        <>
        <header className="flex items-center justify-between p-2">
            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <ul className="flex gap-3">
                <li onClick={()=> navigate("/home")} className="relative font-light after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Products</li>
                <li onClick={()=> navigate("/home/cart")} className="relative font-light after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Cart</li>
            </ul>   
            <Profile/>
        </header>
        <main className="px-2 bg-[#F2F0F1]">
            <Outlet/>
        </main>
        <Toaster/>
        <footer>
            <h1>Footer...</h1>
        </footer>
        </>
    )
}