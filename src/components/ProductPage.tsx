import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../global/types";
import '../styles/ProductPage.css'
import ProductCard from "./ProductCard";
import { fetchData } from "../api/api";
const ProductPage: React.FC = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState<Products[]>([])
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() =>{
        async function getProducts(){
            const data  = await fetchData()
            setProducts([...data.products])  
        }
        getProducts()
    },[])

    const handleClick = (productId: number) => {
        navigate(`/product/${productId}`)
    }

    return (
        <div>
            <div className="products-page-items">
                {
                    products.map((product)=>{
                        return (<ProductCard key={product.id} props={product} onClick={handleClick}/>)
                    })
                }

            </div>
            <div className="products-page-footer">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default ProductPage;