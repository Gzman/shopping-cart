import "./CartItem.css"

const CartItem = ({ name, src, price }) => {
    return (
        <div className="cart-item">
            <img className="cart-item-img" src={src}></img>
            <div className="cart-item-info">
                <p className="cart-item-name">{name}</p>
                <p className="cart-item-price">{price}</p>
            </div>
        </div>
    )
}

export { CartItem }