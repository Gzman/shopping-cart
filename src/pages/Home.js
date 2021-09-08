import { CategoryItem } from "../components/CategoryItem"
import { categories } from "../data/products"
import "./Home.css"

const Home = ({ filterProductsAfterCategory }) => {
    return (
        <section className="home">
            <div className="home-presentation">
                <h2 className="presentation-title">Welcom to...</h2>
            </div>
            <div className="home-category-links">
                <CategoryItem title="Shoes" src="" filterOnClick={() => filterProductsAfterCategory("Shoes")} />
                <CategoryItem title="Underwear" src="" filterOnClick={() => filterProductsAfterCategory("Underwear")} />
                <CategoryItem title="Category 3" src="" filterOnClick={() => filterProductsAfterCategory("Cloth")} />
            </div>
        </section>
    )
}

export { Home }