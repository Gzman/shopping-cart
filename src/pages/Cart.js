import { CartItem } from "../components/CartItem"
import { QuantityInput } from "../components/QuantityInput"
import "./Cart.css"

const Cart = ({ cart, editQunatityOnCart, removeFromCart, calculateTotal, getItemCount }) => {
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
                    cart.map((item) =>
                        <>
                            <CartItem
                                key={item.cartId}
                                name={item.name}
                                src={item.src}
                                price={item.price}
                            />
                            <QuantityInput
                            key={`${item.cartId}quantity`}
                                quantity={item.quantity}
                                editQunatityOnCart={(quantity) => editQunatityOnCart(item.cartId, quantity)}
                            />
                            <p key={`${item.cartId}total`} className="total">{(item.price * item.quantity).toFixed(2)}</p>
                            <button key={`${item.cartId}remove`} className="remove-item" onClick={() => removeFromCart(item.cartId)}>X</button>
                        </>
                    )
                }
            </div>
            <div className="cart-summary">
                <p className="total-price">{`Total Price (${getItemCount(cart)} Item): ${calculateTotal(cart)} Euro`}</p>
                <button className="checkout-btn" >Checkout</button>
            </div>
        </section>
    )
}

export { Cart }