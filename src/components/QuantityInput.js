import "./QuantityInput.css"

const QuantityInput = ({ quantity, editQunatityOnCart }) => {
    return (
        <div className="quantity-input-container">
            <button className="increment-btn" onClick={() => editQunatityOnCart(quantity + 1)}>+</button>
            <input className="quantity-input" type="number" value={quantity} onChange={(e) => editQunatityOnCart(e.target.value)} min="1" />
            <button className="decrement-btn" onClick={() => {
                if (quantity === 1) return;
                editQunatityOnCart(quantity - 1);
            }}>-</button>
        </div>
    )
}

export { QuantityInput }