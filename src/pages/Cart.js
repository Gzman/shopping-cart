import { CartItem } from "../components/CartItem"
import "./Cart.css"

const Cart = ({ }) => {
    return (
        <section className="cart">
            <div className="cart-header">
                <h3 className="cart-header-title">Cart</h3>
            </div>
            <div className="cart-items">
                <p className="item-header">Product</p>
                <p className="item-header">Quantity</p>
                <p className="item-header">Total</p>
                <p className="item-header">Remove</p>
                {
                    /*
                        map each cart item to
                        <>
                            <CartItem>
                            <QuanttySelect>
                            <p>{price * quantity}</p>
                            <RemoveIcon>
                        <>

                    */
                }
            </div>
            <div className="cart-summary">
                <p className="total-price">{`Total Price (${1} Item): ${150.99} Euro`}</p>
                <button className="checkout-btn">Checkout</button>
            </div>
        </section>
    )
}

export { Cart }