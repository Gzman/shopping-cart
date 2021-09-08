
const AddToCartBtn = ({ addToCart }) => {
    return (
        <div className="add-to-cart-btn">
            <button 
            className="add-to-cart-icon"
            onClick={addToCart}
            >
                Add to Cart
                </button>
        </div>
    )
}

export { AddToCartBtn }