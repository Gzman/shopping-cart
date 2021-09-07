import { QuantityInput } from "../components/QuantityInput"
import { AddToCartBtn } from "../components/AddToCartBtn"
import "./ProductDetails.css"

const ProductDetails = ({ }) => {
    return (
        <div className="product-details">
            <h4 className="product-details-name">Productname</h4>
            <img className="product-details-img"></img>
            <p className="product-details-descrption"></p>
            <QuantityInput />
            <AddToCartBtn />
        </div>
    )
}

export { ProductDetails }