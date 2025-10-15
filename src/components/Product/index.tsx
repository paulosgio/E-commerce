import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks"

export default function Product() {

    const { id } = useParams()
    const data = useAppSelector(param => param.products.data) || []
    const product = data.find(param => param.id === id)
    const navigate = useNavigate()

    const logOut = ()=> {
        localStorage.removeItem("token")
        localStorage.removeItem("isAdmin")
        localStorage.removeItem("name")
        navigate("/")
    }

    if (!product) {
        return <p>Produto nao encontrado</p>
    }
        return(
            <>
            <button onClick={logOut}>sair</button>
            <button onClick={()=> navigate("/home/cart")}>Carrinho</button>
                <ul>
                    <li>{product.title}</li>
                    <li>{product.description}</li>
                    <li>{product.price}</li>
                    <button onClick={()=> navigate(-1)}>voltar</button>
                </ul>
            </>
        )
}