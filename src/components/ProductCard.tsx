import { Products } from "../global/types";
import { useDispatch } from "react-redux";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import '../styles/ProductCard.css'
import { ActionType } from "../state/action-types";
import { renderStars } from "../utils/renderStars";

interface ProductCardProps {
    props: Products,
    onClick: (id: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({props:{images, title, brand, price, rating, id}, onClick}: ProductCardProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        onClick(id)
    }

    const addToCart = () => {
        const data = {
            id: id,
            quantity: 1,
            name: title,
            image: images,
            price: price
        }
        dispatch({type: ActionType.ADD_TO_CART, payload: data})
    }

    return (
        <div className="card">
            {images ? <img className="card-image" src={images[0]} alt={title} onClick={handleClick}></img>: 
                <div>Loading image...</div>
            }
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-brand">{brand}</div>
                <div className="card-price">${price}</div>
                <div className="card-rating">{renderStars(rating)}</div>
                <button className="card-add-to-cart-button" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;