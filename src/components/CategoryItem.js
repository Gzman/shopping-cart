
const CategoryItem = ({ title, src, filterOnClick }) => {
    return (
        <div className="category-item" onClick={filterOnClick}>
            <img className="category-item-img" src={src}></img>
            <h4 className="category-item-title">{title}</h4>
        </div>
    )
}

export { CategoryItem }