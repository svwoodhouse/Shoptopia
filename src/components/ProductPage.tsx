import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../global/types";
import '../styles/Product.css'
import ProductCard from "./ProductCard";

const ProductPage: React.FC = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState<Products[]>([])

    useEffect(() =>{
        async function fetchData(){
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProducts([...data.products])
        }
        fetchData()        
    },[])

    const handleClick = (productId: number) => {
        navigate(`/product/${productId}`)
    }

    return (
        <div className="products-page">
            {
                products.map((product)=>{
                    return (<ProductCard key={product.id} props={product} onClick={handleClick}/>)
                })
            }
        </div>
    )
}

export default ProductPage;