
const CategoryItem = ({ title, src }) => {
    return (
        <div className="category-item">
            <img className="category-item-img" src={src}></img>
            <h4 className="category-item-title">{title}</h4>
        </div>
    )
}

export { CategoryItem }