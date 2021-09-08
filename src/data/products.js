import uniqid from "uniqid"

const categories = [
    "Underwear",
    "Cloth",
    "Shoes",
];

class Product {
    constructor(name, description, price, sex, category, src) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.price = price;
        this.sex = sex;
        this.category = category;
        this.src = src;
        this.timestamp = Date.now();
    }
}

const products = [
    new Product("Slip XL", "Soft, blue...", 19.95, "female", "Underwear"),
    new Product("Shirt", "Soft, blue...", 29.95, "male", "Cloth"),
    new Product("Boxershort", "Soft, black...", 19.95, "male", "Underwear"),
    new Product("Shirt", "Soft, white...", 39.95, "male", "Cloth"),
    new Product("Long sleave", "Soft, blue...", 35.95, "male", "cloth"),
    new Product("Nike Air", "Soft, blue...", 69.95, "unisex", "Shoes"),
    new Product("Shirt White", "Soft, white...", 49.95, "female", "Cloth"),
    new Product("Skirt", "Soft, black...", 79.95, "female", "Cloth"),
    new Product("Jeans", "Soft, blue...", 89.95, "female", "Cloth"),
];

export {
    categories,
    Product,
    products,
}