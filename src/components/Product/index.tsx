import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks"

export default function Product() {

    const { id } = useParams()
    const data = useAppSelector(param => param.products) || []
    const product = data.find(param => param.id === id)
    const navigate = useNavigate()

    if (!product) {
        return <p>Produto nao encontrado</p>
    }
        return(
            <ul>
                <li>{product.name}</li>
                <li>{product.description}</li>
                <li>{product.price}</li>
                <button onClick={()=> navigate(-1)}>voltar</button>
            </ul>
        )
}