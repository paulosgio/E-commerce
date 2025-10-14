import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"; 
import type { ILoginForm } from "../../interfaces/Interfaces"
import { useAppDispatch } from "../../hooks"
import { loginFailed, loginSuccess } from "../../features/authSlice"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {

    const schema = z.object({
        user: z.string(),
        password: z.string()
    }).refine(
        (data) =>
          (data.user === "paulo" || data.user === "adm") &&
          (data.password === "123" || data.password === "321"),
        {
          message: "Usuário ou senha incorretos!",
          path: ["password"], // você pode usar "user" ou "password" — apenas um será marcado no form
        }
      )
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(schema), mode: "onSubmit"})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(({ user, password })=> {
        if (user === "paulo" && password === "123") {
            const response = {
                token: "user",
                isAdmin: false,
                username: user
            }
            dispatch(loginSuccess(response))
            navigate("/home")
        } else if (user === "adm" && password === "321") {
            const response = {
                token: "adm",
                isAdmin: true,
                username: user
            }
            dispatch(loginSuccess(response))
            navigate("/home")
        } else {
            dispatch(loginFailed())
        }
    })

    return(
        <div className="flex flex-col gap-y-8 justify-center items-center h-dvh">
            <form className="grid w-full max-w-sm gap-3 items-center" onSubmit={onSubmit}>
                <Label htmlFor="user">User</Label>
                <Input {...register("user", { required: true })} type="text" />
                <Label htmlFor="password">Password</Label>
                <Input {...register("password", { required: true })} type="text" />
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                <Button type="submit">enviar</Button>
            </form>
            <div className="w-sm">
                <ul className="flex justify-between">
                    <li>
                        <h2 className="text-sm font-medium">Login para usuário padrão:</h2>
                        <p className="font-light text-sm text-gray-700">User: paulo</p>
                        <p className="font-light text-sm text-gray-700">Password: 123</p>
                    </li>
                    <li>
                        <h2 className="text-sm font-semibold">Login para administrador:</h2>
                        <p className="font-light text-sm text-gray-700">User: adm</p>
                        <p className="font-light text-sm text-gray-700">Password: 321</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}