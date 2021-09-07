import { useState } from "react";

const useProducts = (dataSrc) => {
    const [products, setProducts] = useState(() => {
        if (dataSrc) {
            return dataSrc;
        } else {
            [];
        }
    });

    const sortProductsAfterName = (asc = true) => {
        setProducts(
            products => [...products].sort((a, b) => {
                return asc
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            })
        );
    }

    const sortProductsAfterPrice = (asc = true) => {
        setProducts(
            products => [...products].sort((a, b) => {
                return asc
                    ? a.price - b.price
                    : b.price - a.price
            })
        );
    }

    const filterProductsAfterCategory = (category, sex) => {
        setProducts(
            products => products.filter((product) =>
                product.category === category && product.sex === sex
            )
        );
    }

    const filterProductsByText = (text) => {
        setProducts(
            products => products.filter((product) => {
                const searchText = text.toLowerCase();
                return product.name.toLowerCase().includes(searchText)
                    || product.description.toLowerCase().includes(searchText)
                    || product.price.toString().includes(searchText);
            })
        );
    }

    return {
        products,
        sortProductsAfterName,
        sortProductsAfterPrice,
        filterProductsAfterCategory,
        filterProductsByText,
    }
}

export { useProducts }