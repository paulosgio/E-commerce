import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { addToCart } from "../../features/cartSlice"
import { useEffect } from "react"
import { getProducts } from "@/features/productsSlice"
import { Button } from "../ui/button"
import wallpaper from "../../assets/wallpaper.svg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Card, CardContent } from "../ui/card"
import { toast } from "sonner"

export default function Home() {

    const data = useAppSelector(param => param.products.data)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(()=> {
        const initialize = async()=> {
            await dispatch(getProducts())
        }
        initialize()
    }, [])

    return(
        <>
        <div style={ { backgroundImage: `url(${wallpaper})` } } className="bg-cover bg-center h-screen w-full mb-16">
            <h1 className="text-center text-8xl font-bold">LOREM IPSUM DOLOR LOREM DOLOR</h1>
            <Carousel className="w-full flex items-center max-w-xs ml-42 mt-6">
                <CarouselContent className="h-96">
                    {data && data.map(({ title, description, id, price, image }, i)=> {
                        return(
                            <CarouselItem className="" key={i}>
                                <div className="p-1">
                                    <Card className="">
                                        <CardContent className="flex flex-col justify-between aspect-square items-center">
                                            <img className="h-60" src={image} alt="" />
                                            <Button className="cursor-pointer" onClick={()=> {
                                            toast.success("Product added to cart!", {
                                                description: "Your product was successfully added to the cart.",
                                                action: {
                                                  label: "Close",
                                                  onClick: () => console.log("Close"),
                                                },
                                              })
                                            dispatch(addToCart({
                                                title,
                                                description,
                                                id,
                                                price,
                                                quantity: 1
                                            }))}   
                                        }>
                                            Add to cart
                                        </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className="cursor-pointer hover:scale-125" />
                <CarouselNext className="cursor-pointer hover:scale-125" />
            </Carousel>
        </div>
            <ul className="grid grid-cols-3 gap-18">
                {data && data.map(({title, description, id, price, image}, i)=> {
                    return(
                        <div key={i} className="bg-gray-100 w-sm cursor-pointer rounded-xl shadow-xl px-2 py-4 hover:scale-105 transition duration-150">
                            <li onClick={()=> navigate(`/home/${id}`)} key={i}>
                                <div className="flex items-center gap-4 mb-4">
                                    <img className="w-26 h-26" src={image} alt="" />
                                    <h4 className="text-sm font-medium">{title}</h4>
                                </div>
                                <div className="px-2 flex flex-col gap-3">
                                    <h4 className="text-xs line-clamp-3 font-light">{description}</h4>
                                    <div className="flex items-center justify-between mt-2">
                                        <Button className="cursor-pointer" onClick={(e)=> {
                                            toast.success("Product added to cart!", {
                                                description: "Your product was successfully added to the cart.",
                                                action: {
                                                  label: "Close",
                                                  onClick: () => console.log("Close"),
                                                },
                                              })
                                            e.stopPropagation()
                                            dispatch(addToCart({
                                                title,
                                                description,
                                                id,
                                                price,
                                                quantity: 1
                                            }))}   
                                        }>
                                            Add to cart
                                        </Button>
                                        <h4 className="font-semibold text-sm">R$ {price}</h4>
                                    </div>
                                </div>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}