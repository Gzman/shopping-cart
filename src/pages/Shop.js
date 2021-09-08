import { Accordion } from "../components/ui/Accordion"
import { ProductCard } from "../components/ProductCard"
import { categories } from "../data/products"
import "./Shop.css"
import { useEffect } from "react"

const Shop = ({ products, allProducts, filterProductsAfterCategory, sortProductsAfterName, sortProductsAfterPrice, addToCart }) => {
    // useEffect(() => {
    //     allProducts();
    // }, []);
    
    const sortMapping = {
        "Name asc": sortProductsAfterName,
        "Name desc": () => sortProductsAfterName(false),
        "Price asc": sortProductsAfterPrice,
        "Price desc": () => sortProductsAfterPrice(false),
    }

    return (
        <div className="shop">
            <nav className="category-nav">
                <a className="category-link" onClick={allProducts} >All</a>
                <Accordion title="Woman's Clothes" isColapsed={true} >
                    <ul className="category-selection">
                        {
                            categories.map((category) =>
                                category !== "unisex" &&
                                <li key={`female${category}`}>
                                    <a
                                        className="category-link"
                                        onClick={() => filterProductsAfterCategory(category, "female")}
                                    >
                                        {category}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </Accordion>
                <Accordion title="Man's Clothes" isColapsed={true} >
                    <ul className="category-selection">
                        {
                            categories.map((category) =>
                                category !== "unisex" &&
                                <li key={`male${category}`}>
                                    <a
                                        className="category-link"
                                        onClick={() => filterProductsAfterCategory(category, "male")}
                                    >
                                        {category}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </Accordion>
                <a className="category-link" >Shoes</a>
            </nav>
            <div className="product-list">
                <select
                    className="product-order-select"
                    onChange={(e) => sortMapping[e.target.value]()}
                >
                    {
                        Object.keys(sortMapping).map((option) =>
                            <option key={option}>{option}</option>
                        )
                    }
                </select>
                <div className="products">
                    {
                        products.map((product) =>
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                src={product.src}
                                addToCart={() => addToCart(product, 1)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export { Shop }