import { useState } from "react";
import uniqid from "uniqid";

const useCart = () => {
    const [cart, setCart] = useState([]);

    const containsProduct = (productId) => {
        return cart.some((item) => item.id === productId);
    }

    const addToCart = (product, quantity = 1) => {
        if (quantity < 1) return;
        if (containsProduct(product.id)) {
            setCart(
                cart => cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity, }
                        : item
                )
            )
            return;
        }
        setCart(
            cart => [...cart, { ...product, quantity, cartId: uniqid(), }],
        );
    }

    const editQunatityOnCart = (cartId, newQuantity) => {
        if (quantity < 1) return;
        setCart(
            cart => cart.map((item) =>
                item.cartId === cartId
                    ? { ...item, quantity: newQuantity }
                    : item
            ),
        );
    }

    const removeFromCart = (cartId) => {
        setCart(
            cart => cart.filter((item) => item.cartId !== cartId),
        );
    }

    const calculateTotalCost = () => {
        return cart.reduce((total, item) => {
            return total + item.price;
        }, 0);
    }

    return {
        cart,
        addToCart,
        editQunatityOnCart,
        removeFromCart,
        calculateTotalCost,
    }
}

export { useCart }