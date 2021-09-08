import { useState } from "react"

const useFilterProducts = (products, callback) => {
    const [filtered, setFiltered] = useState(products);

    const allProducts = () => {
        setFiltered(products);
    }

    const filterProductsAfterCategory = (category, sex) => {
        setFiltered(
            products.filter((product) => 
                sex
                ? product.category === category && product.sex === sex
                : product.category === category
            )
        );
        callback();
    }

    const filterProductsByText = (text) => {
        setFiltered(
            products.filter((product) => {
                const searchText = text.toLowerCase();
                return product.name.toLowerCase().includes(searchText)
                    || product.description.toLowerCase().includes(searchText)
                    || product.price.toString().includes(searchText);
            })
        );
        callback();
    }

    const sortProductsAfterName = (asc = true) => {
        setFiltered(
            filtered => [...filtered].sort((a, b) => {
                return asc
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            })
        );
    }

    const sortProductsAfterPrice = (asc = true) => {
        setFiltered(
            filtered => [...filtered].sort((a, b) => {
                return asc
                    ? a.price - b.price
                    : b.price - a.price
            })
        );
    }

    return {
        filtered,
        allProducts,
        filterProductsAfterCategory,
        filterProductsByText,
        sortProductsAfterName,
        sortProductsAfterPrice,
    }
}

export { useFilterProducts }