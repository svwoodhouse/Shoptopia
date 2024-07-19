import { useEffect, useState } from "react"
import { Products, Reviews } from "../global/types"
import { useParams } from "react-router-dom"
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const [product, setProduct] = useState<Products>({})
    const [reviews, setReviews] = useState<Reviews[]>([])
    const { productId } = useParams()

    useEffect(()=>{
        async function getData(){
            const response = await fetch(`https://dummyjson.com/products/${productId}`)
            const data: Products = await response.json()
            setProduct(data)
            setReviews([...data.reviews])
        }
        getData()
    }, [])

    return (
        <div className="product-detail-container">
            <div className="product-detail-image-container">
                {product.images ? <img className="product-detail-image" src={product.images[0]} alt={product.title}></img> : <div>Loading image..</div>}
                <div>
                    <div>{product.title}</div>
                    <div>{product.brand}</div>
                </div>
            </div>
            <div className="reviews-container">
                {
                    reviews.map((review, index)=>{
                        return(
                            <div className="rating-container" key={index}>
                                <div>{review.rating} stars</div>
                                <div>{review.reviewerName}</div>
                                <div>{review.reviewerEmail}</div>
                                <div>Reviewed on {review.date}</div>
                                <div>{review.comment}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductDetail