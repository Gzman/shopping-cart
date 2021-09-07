import { CategoryItem } from "../components/CategoryItem"
import "./Home.css"

const Home = ({ }) => {
    return (
        <section className="home">
            <div className="home-presentation">
                <h2 className="presentation-title">Welcom to...</h2>
            </div>
            <div className="home-category-links">
                <CategoryItem title="Shoes" src="" />
                <CategoryItem title="Underwear" src="" />
                <CategoryItem title="Category 3" src="" />
            </div>
        </section>
    )
}

export { Home }