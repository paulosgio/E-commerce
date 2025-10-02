import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../../hooks"

export default function PrivateRoute() {

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

    if (!isAuthenticated) {
        return(
            <Navigate to="/" replace/>
        )
    }
    return(
        <Outlet/>
    )
}