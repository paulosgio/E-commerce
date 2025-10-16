import { useState } from "react"
import { checkout  } from "../../features/cartSlice"
import { addPurchase } from "../../features/purchasedSlice"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "flowbite-react"
import { Button } from "../ui/button"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"

export default function Cart() {

    const cart = useAppSelector(param => param.cart) || []
    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState<boolean>(false) 
    const navigate = useNavigate()

    function handleCheckout() {
        dispatch(addPurchase(cart))
        dispatch(checkout())
    }

    const priceCart = cart.reduce((acum, item)=> acum + item.price * item.quantity, 0)

    return(
        <div className="pt-3">
            <ArrowLeftIcon className="cursor-pointer mb-10 hover:scale-115 transition duration-150" onClick={()=> navigate(-1)} fontSize={18}/>
            <ul className="grid grid-cols-3 gap-6 justify-items-center">
                {cart.length > 0 ? (
                    cart.map(({description, id, image, title, price, quantity}, i)=> {
                        return(
                            <div key={i} className="bg-gray-100 w-sm cursor-pointer rounded-xl shadow-xl px-2 py-4 hover:scale-101 transition duration-150">
                            <li onClick={()=> navigate(`/home/${id}`)} key={i}>
                                <div className="flex items-center gap-4 mb-4">
                                    <img className="w-26 h-26" src={image} alt="" />
                                    <h4 className="text-sm font-medium">{title}</h4>
                                </div>
                                <div className="px-2 flex flex-col gap-3">
                                    <h4 className="text-xs line-clamp-3 font-light">{description}</h4>
                                    <div className="flex items-center justify-between mt-2">
                                        <h4 className="font-semibold text-sm">R$ {price}</h4>
                                        <h4 className="font-light text-sm">{quantity}</h4>
                                    </div>
                                </div>
                            </li>
                        </div>
                        )
                    })
                ): (
                    <p>Sem itens</p>
                )}
            </ul>
            {cart.length > 0 ? (
                <div className="w-full flex justify-end">
                    <Button className="cursor-pointer" onClick={()=> setModalActive(true)}>Checkout</Button>
                </div>
            ) : (
                <></>
            )}
            {modalActive && (
                <>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                    <h2>tem certeza que deseja confirmar a compra de {priceCart}</h2>
                    <button onClick={()=> {
                        handleCheckout()
                        setModalActive(false)
                    }}>Sim</button>
                    <button onClick={()=> setModalActive(false)}>Nao</button>
                </>
            )}
            <h1>Preço total {priceCart}</h1>
        </div>
    )
}