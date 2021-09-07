import React from "react"
import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <input className="header-search" type="text" />
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
            </div>
        </div>
    )
}

export { Header }