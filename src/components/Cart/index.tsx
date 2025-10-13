import { useState } from "react"
import { checkout, removeFromCart } from "../../features/cartSlice"
import { addPurchase } from "../../features/purchasedSlice"
import { useAppDispatch, useAppSelector } from "../../hooks"
import Profile from "../Profile"

export default function Cart() {

    const isAdmin = useAppSelector(param => param.auth.isAdmin)
    const name = localStorage.getItem("name")
    const cart = useAppSelector(param => param.cart) || []
    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState<boolean>(false) 

    function handleCheckout() {
        dispatch(addPurchase(cart))
        dispatch(checkout())
    }

    const priceCart = cart.reduce((acum, item)=> acum + item.price * item.quantity, 0)

    return(
        <>
            <Profile name={name} role={isAdmin ? "Admin" : "User"}/>
            <h1>Cart</h1>
            <ul>
                {cart.length > 0 ? (
                    cart.map((param, i)=> {
                        return(
                            <li key={i}>
                                <h3>{param.name}</h3>
                                <h3>{param.description}</h3>
                                <h3>{param.price}</h3>
                                <h3>{param.quantity}</h3>
                                <button onClick={()=> {dispatch(removeFromCart(param.id))}}></button>
                            </li>
                        )
                    })
                ): (
                    <p>Sem itens</p>
                )}
            </ul>
            <button onClick={()=> setModalActive(true)}>Checkout</button>
            {modalActive && (
                <>
                    <h2>tem certeza que deseja confirmar a compra?</h2>
                    <button onClick={()=> {
                        handleCheckout()
                        setModalActive(false)
                    }}>Sim</button>
                    <button onClick={()=> setModalActive(false)}>Nao</button>
                </>
            )}
            <h1>Preço total {priceCart}</h1>
        </>
    )
}