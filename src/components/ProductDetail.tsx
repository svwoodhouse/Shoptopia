import { useEffect, useState } from "react"
import { Products, Reviews } from "../global/types"
import { useParams } from "react-router-dom"
import '../styles/ProductDetail.css';
import { renderStars } from "../utils/renderStars";
import { fetchData } from "../api/api";

const ProductDetail = () => {
    const [product, setProduct] = useState<Products>({})
    const [reviews, setReviews] = useState<Reviews[]>([])
    const { productId } = useParams()

    useEffect(()=>{
        async function getProductDetails(){
            const data = await fetchData(`https://dummyjson.com/products/${productId}`)
            setProduct(data)
            setReviews([...data.reviews])
        }
        getProductDetails()
    }, [])

    return (
        <div className="product-detail-page-container">
            <div className="product-detail-container">
                <div className="product-detail-image-container">
                    {product.images ? <img className="product-detail-image" src={product.images[0]} alt={product.title}></img> : <div>Loading image..</div>}
                    <div>
                        <div>{product.title}</div>
                        <div>By: {product.brand}</div>
                        <div>${product.price}</div>
                    </div>
                </div>
                <div className="product-details">
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.warrantyInformation}</p>
                    <p>{product.shippingInformation}</p>
                    <p>{product.returnPolicy}</p>
                </div>
            </div>
            <div className="reviews-container">
            <h2>Reviews</h2>
                {
                    reviews.map((review, index)=>{
                        return(
                            <div className="rating-container" key={index}>
                                <div>{review.reviewerName}</div>
                                <div>{review.reviewerEmail}</div>
                                <div>{renderStars(review.rating)}</div>
                                <div>{review.comment}</div>
                                <div>Reviewed on {review.date}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductDetail