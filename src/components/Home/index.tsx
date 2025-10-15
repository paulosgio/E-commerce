import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { addToCart } from "../../features/cartSlice"
import { useEffect } from "react"
import { getProducts } from "@/features/productsSlice"

export default function Home() {

    const data = useAppSelector(param => param.products.data)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(getProducts())
    }, [])

    return(
        <>
            <ul>
            {data && data.map(({title, description, id, price, image}, i)=> {
                return(
                    <>
                        <li onClick={()=> navigate(`/home/${id}`)} key={i}>
                            <h4>{title}</h4>
                            <h4>{description}</h4>
                            <h4>{price}</h4>
                            <img src={image} alt="" />
                        </li>
                            <button onClick={()=> dispatch(addToCart({
                                title,
                                description,
                                id,
                                price,
                                quantity: 1
                            }))}>Adicionar ao carrinho</button>
                    </>
                )
            })}
            </ul>
        </>
    )
}