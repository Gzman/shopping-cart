import { Switch, Route } from "react-router-dom"
import { Header } from './components/header/Header';
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home"
import { Shop } from "./pages/Shop"
import { Cart } from "./pages/Cart"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
          </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
