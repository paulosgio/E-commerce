import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {

    const isAuthenticated = localStorage.getItem("token")

    if (!isAuthenticated) {
        return(
            <Navigate to="/" replace/>
        )
    }
    return(
        <Outlet/>
    )
}