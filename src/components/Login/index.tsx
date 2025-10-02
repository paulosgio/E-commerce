import { useForm } from "react-hook-form"
import type { ILoginForm } from "../../interfaces/Interfaces"
import { useAppDispatch } from "../../hooks"
import { loginFailed, loginSuccess } from "../../features/authSlice"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const { register, handleSubmit } = useForm<ILoginForm>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(({ user, password })=> {
        if (user === "paulo" && password === "123") {
            const response = {
                token: "user",
                isAdmin: false
            }
            dispatch(loginSuccess(response))
            navigate("/home")
        } else if (user === "adm" && password === "321") {
            const response = {
                token: "adm",
                isAdmin: true
            }
            dispatch(loginSuccess(response))
            navigate("/home")
        } else {
            dispatch(loginFailed())
        }
    })

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="user">User</label>
            <input {...register("user", { required: true })} type="text" />
            <label htmlFor="password">Password</label>
            <input {...register("password", { required: true })} type="text" />
            <button type="submit">enviar</button>
        </form>
    )
}