import './App.css';
import { Header, Products, SingleProduct, Cart, MiniCart, CurrencyOptions } from './components';

function App() {
  return (
    <div>
        <Header/>
        <Products/>
        <SingleProduct/>
        <Cart/>
        {/* <MiniCart/> */}
        {/* <CurrencyOptions/> */}
    </div>
  );
}

export default App;
