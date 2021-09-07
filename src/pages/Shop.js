import { Accordion } from "../components/ui/Accordion"
import { ProductCard } from "../components/ProductCard"
import "./Shop.css"

const Shop = ({ }) => {
    return (
        <div className="shop">
            <nav className="category-nav">
            <a className="category-link" >All</a>
                <Accordion title="Woman's Clothes" isColapsed={true} >
                    <ul className="category-selection">
                        <li>
                            <a className="category-link" >Underwear</a>
                        </li>
                        <li>
                            <a className="category-link" >Clothes</a>
                        </li>
                    </ul>
                </Accordion>
                <Accordion title="Man's Clothes" isColapsed={true} >
                    <ul className="category-selection">
                        <li>
                            <a className="category-link" >Underwear</a>
                        </li>
                        <li>
                            <a className="category-link" >Clothes</a>
                        </li>
                    </ul>
                </Accordion>
                <a className="category-link" >Shoes</a>
            </nav>
            <div className="product-list">
                <select
                    className="product-order-select"
                    onChange={(e) => console.log(e.target.value)}
                >
                    <option>Name</option>
                    <option>Price</option>
                </select>
                <div className="products">
                    <ProductCard
                        name={"Underwear x"}
                        description={""}
                        price={"56.89"}
                    />
                </div>
            </div>
        </div>
    )
}

export { Shop }