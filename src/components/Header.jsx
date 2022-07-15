import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MiniCart, CurrencyOptions } from '../components';
import { setItemS } from '../actions'; 
import getSymbolFromCurrency from 'currency-symbol-map';



const Header = () => {

  const currencY = useSelector(state => state.currency);
  const counter = useSelector(state => state.counter);
  const itemS = useSelector(state => state.itemS);
  const dispatch = useDispatch();

  const [currency, setCurrency] = useState(false);
  const [cart, setCart] = useState(false);

  const handleCurrency = () => {
    if (currency === false) {
      setCurrency(true)
    } else {
      setCurrency(false)
    }
  }
  const handleCart = () => {
    if (cart === false) {
      setCart(true)
    } else {
      setCart(false)
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="box1_header">
        <Link to="/" className="box1_header_women">WOMEN</Link>
        <Link to="/" className="box1_header_men">MEN</Link>
        <Link to="/" className="box1_header_kids">KIDS</Link>
        </div>
        <Link to="/" className="box2_header"><img src={require('../images/' + 'logo' + '.png')} alt="1" /></Link>
        <div className="box3_header">
          <div className="box3_header_currency" onClick={handleCurrency}>
          <div>{getSymbolFromCurrency(currencY.slice(0, 3))}</div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
            </svg>
          </div>
          <div className="box3_header_cart" onClick={handleCart}>
          {itemS.length ? 
          <div className="box3_header_cart_count">
            {itemS.length}
            </div> : " "
              }
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
        </div>
        {currency ? <CurrencyOptions /> : " "}
        {cart ? <MiniCart /> : " "}
      </div>
      {cart ? <div className="cover" onClick={() => setCart(false)}></div> : " "}
      {currency ? <div className="cover" onClick={() => setCurrency(false)}></div> : " "}
    </>
  )
}

export default Header