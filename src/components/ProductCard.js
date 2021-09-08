import { AddToCartBtn } from "./AddToCartBtn"
import "./ProductCard.css"

const ProductCard = ({ name, description, price, src, addToCart }) => {
    return (
        <div className="product-card">
            <img className="product-card-img" src={src}></img>
            <div className="product-card-info">
                <p className="product-card-name">{name}</p>
                <p className="product-card-price">{price}</p>
            </div>
            <AddToCartBtn addToCart={addToCart} />
        </div>
    )
}

export { ProductCard }