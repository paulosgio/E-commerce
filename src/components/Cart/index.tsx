import { useAppSelector } from "../../hooks"
import Profile from "../Profile"

export default function Cart() {

    const isAdmin = useAppSelector(param => param.auth.isAdmin)
    const name = localStorage.getItem("name")

    return(
        <>
            <Profile name={name} role={isAdmin ? "Admin" : "User"}/>
            <h1>Cart</h1>
        </>
    )
}