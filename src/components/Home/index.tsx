import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks"
import Profile from "../Profile"
import { addToCart } from "../../features/cartSlice"

export default function Home() {

    const name = localStorage.getItem("name")
    const isAdmin = useAppSelector(param => param.auth.isAdmin)
    const data = useAppSelector(param => param.products)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    return(
        <>
            <h1>Home</h1>
            <Profile name={name} role={ isAdmin ? "Admin" : "User" }/>
            <ul>
            {data.map(({name, description, id, price}, i)=> {
                return(
                        <li onClick={()=> navigate(`/home/${id}`)} key={i}>
                            <h4>{name}</h4>
                            <h4>{description}</h4>
                            <h4>{price}</h4>
                            <button onClick={()=> dispatch(addToCart({
                                name,
                                description,
                                id,
                                price,
                                quantity: 1
                            }))}>Adicionar ao carrinho</button>
                        </li>
                )
            })}
            </ul>
        </>
    )
}