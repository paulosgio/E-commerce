import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
        <header>
            <h1>E-commerce</h1>
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