import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../hooks"
import Profile from "../Profile"

export default function Home() {

    const name = localStorage.getItem("name")
    const isAdmin = useAppSelector(param => param.auth.isAdmin)
    const data = useAppSelector(param => param.products)
    const navigate = useNavigate()

    return(
        <>
            <h1>Home</h1>
            <Profile name={name} role={ isAdmin ? "Admin" : "User" }/>
            <ul>
            {data.map((param, i)=> {
                return(
                    <li onClick={()=> navigate(`/home/${param.id}`)} key={i}>
                        <h4>{param.name}</h4>
                        <h4>{param.description}</h4>
                        <h4>{param.price}</h4>
                        <button>Adicionar ao carrinho</button>
                    </li>
                )
            })}
            </ul>
        </>
    )
}