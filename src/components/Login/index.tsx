import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"; 
import { useAppDispatch } from "../../hooks"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { auth } from "@/features/authSlice";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Login() {

    const schema = z.object({
        username: z.string().min(1, "Usuário é obrigatório"),
        password: z.string().min(1, "Senha é obrigatório")
    })
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(schema), mode: "onSubmit"})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = handleSubmit(async ({ username, password })=> {
        setLoading(true)
        localStorage.setItem("name", username)
        const result = await dispatch(auth({username, password}))
        if (result.meta.requestStatus === "fulfilled") {
            setLoading(false)
            navigate("/home")
        } else {
            setLoading(false)
            setLoginError("Usuário ou senha inválida")
        }
    })

    return(
        <div className="flex flex-col gap-y-8 justify-center items-center h-dvh">
            <form className="grid w-full max-w-sm gap-3 items-center" onSubmit={onSubmit}>
                <Label htmlFor="user">User</Label>
                <Input {...register("username", { required: true })} type="text" />
                {errors.username && <p className="text-red-600">{errors.username.message}</p>}
                <Label htmlFor="password">Password</Label>
                <Input {...register("password", { required: true })} type="text" />
                {loading && <LoaderIcon className={cn("size-4 animate-spin mx-auto")}/>}
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                {loginError && <p className="text-red-600">{loginError}</p>}
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