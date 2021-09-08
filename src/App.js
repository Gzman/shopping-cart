import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom"
import { Header } from './components/header/Header';
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home"
import { Shop } from "./pages/Shop"
import { Cart } from "./pages/Cart"
import { products as mockupData } from "./data/products"
import { useFilterProducts } from "./hooks/useFilterProducts"
import { useCart } from "./hooks/useCart"
import './App.css';

function App() {
  const [products] = useState(() => {
    if (mockupData) {
      return mockupData;
    } else {
      return [];
    }
  });

  const history = useHistory();

  const {
    filtered,
    allProducts,
    filterProductsByText,
    filterProductsAfterCategory,
    sortProductsAfterName,
    sortProductsAfterPrice,
  } = useFilterProducts(products, () => history.replace("/shop"));

  const {
    cart,
    addToCart,
    editQunatityOnCart,
    removeFromCart,
    calculateTotalCost,
    getItemCount,
  } = useCart();

  return (
    <div className="App">
      <Header
        filterProductsByText={filterProductsByText}
        cart={cart}
        getItemCount={getItemCount}
      />
      <main>
        <Switch>
          <Route exact path="/" component={() => <Home filterProductsAfterCategory={filterProductsAfterCategory} />} />
          <Route
            path="/shop"
            component={() => <Shop
              products={filtered}
              allProducts={allProducts}
              filterProductsAfterCategory={filterProductsAfterCategory}
              sortProductsAfterName={sortProductsAfterName}
              sortProductsAfterPrice={sortProductsAfterPrice}
              addToCart={addToCart}
            />} />
          <Route
            path="/cart"
            component={() => <Cart
              cart={cart}
              editQunatityOnCart={editQunatityOnCart}
              removeFromCart={removeFromCart}
              calculateTotal={calculateTotalCost}
              getItemCount={getItemCount}
            />}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
