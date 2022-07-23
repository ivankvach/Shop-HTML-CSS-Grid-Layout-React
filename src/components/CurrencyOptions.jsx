import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrencY, turnCurrency } from '../actions'
import getSymbolFromCurrency from 'currency-symbol-map';

const CurrencyOptions = () => {

  const dispatch = useDispatch();

  const setCurrency = (e) => {
    console.log(parseInt(e.target.value))
    dispatch(setCurrencY(e.target.value))
    dispatch(turnCurrency())
  }
  return (
    <div className="wrapper_currency_options">  
        <option className="wrapper_currency_options_usd" onClick={(e) => setCurrency(e)} value="usd1">{getSymbolFromCurrency("usd")}  USD</option>
        <option className="wrapper_currency_options_eur" onClick={(e) => setCurrency(e)} value="eur1.12">{getSymbolFromCurrency("eur")}  EUR</option>
        <option className="wrapper_currency_options_jpy" onClick={(e) => setCurrency(e)} value="jpy139.23">{getSymbolFromCurrency("jpy")}  JPY</option>
    </div>
  )
}

export default CurrencyOptions