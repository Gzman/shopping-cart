import "./CartItem.css"

const CartItem = ({name, src, price }) => {
    return (
        <div className="cart-item">
            <img className="cart-item-img" src={src}></img>
            <div className="cart-item-info">
                <p className="cart-item-name">{name}</p>
                <div className="cart-item-quantity">
                    <button
                        className="plus-quantity"
                        onClick={() => console.log("+ 1")}
                    >+</button>
                    <input
                        className="quantity-input"
                        type="text" onChange={(e) => console.log(e.target.value)}
                    />
                    <button
                        className="minus-quantity"
                        onClick={() => console.log("- 1")}
                    >-</button>

                </div>
                <p className="cart-item-price">{price}</p>
            </div>
        </div>
    )
}

export { CartItem }