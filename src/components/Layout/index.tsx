import { Outlet, useNavigate } from "react-router-dom";
import Profile from "../Profile";
import { Toaster } from "sonner";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

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
        <main className="px-2 bg-[#F2F0F1] min-h-screen h-full">
            <Outlet/>
        </main>
        <Toaster/>
        <Footer className="h-26 px-2 py-6 w-full bg-black text-white" container>
            <FooterCopyright href="#" by=" Ecommerce by Paulo" year={2025} />
            <FooterLinkGroup className="flex gap-2">
            <FooterLink href="https://linkedin.com/in/paulo-s%C3%A9rgio-dos-anjos">Linkedin</FooterLink>
            <FooterLink href="https://github.com/paulosgio">Github</FooterLink>
            <span>Phone: (74) 9 9919-6607</span>
            <span>Email: paulosergiodosanjossilvafilho@gmail.com</span>
            </FooterLinkGroup>
        </Footer>
        </>
    )
}