import React from "react"
import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import "./Header.css"

const Header = ({ filterProductsByText, cart, getItemCount }) => {
    return (
        <div className="header">
            <Logo />
            <input className="header-search" type="text" onChange={(e) => filterProductsByText(e.target.value)} />
            <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                </ul>
            </nav>
            <div className="header-cart">
                <Link to="/cart">Cart</Link>
                <h3 className="cart-item-counter">
                    {getItemCount(cart)}
                </h3>
            </div>
        </div>
    )
}

export { Header }