import { useAppSelector } from "../../hooks"
import Profile from "../Profile"

export default function Home() {

    const name = localStorage.getItem("name")
    const isAdmin = useAppSelector(param => param.auth.isAdmin)

    return(
        <>
            <h1>Home</h1>
            <Profile name={name} role={ isAdmin ? "Admin" : "User" }/>
        </>
    )
}