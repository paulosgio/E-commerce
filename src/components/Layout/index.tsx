import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {

    const navigate = useNavigate()

    const logOut = ()=> {
        localStorage.clear()
        navigate("/")
    }

    return(
        <>
        <header>
            <h1>E-commerce</h1>
            <button onClick={logOut}>Sair</button>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <h1>Footer...</h1>
        </footer>
        </>
    )
}