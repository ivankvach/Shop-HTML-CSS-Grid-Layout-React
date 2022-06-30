import React, {useState} from 'react';
import {MiniCart, CurrencyOptions} from '../components';

const Header = () => {
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
            <div className="box1_header_women"><a href="#">Women</a></div>
            <div className="box1_header_men"><a href="#">Men</a></div>
            <div className="box1_header_kids"><a href="#">Kids</a></div>
        </div>
        <div className="box2_header">imagebadge</div>
        <div className="box3_header">
          <div className="box3_header_currency" onClick={handleCurrency}>currency</div>
          <div  className="box3_header_cart" onClick={handleCart}>cart</div>
        </div>
        {currency ? <CurrencyOptions/> : " " }
        {cart ? <MiniCart/> : " " }
    </div>
    
    </>
  )
}

export default Header