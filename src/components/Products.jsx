import React, { useState }from 'react';
import products from '../data';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';

const Products = () => {

  const currencY = useSelector(state => state.currency);

console.log(currencY.slice(0, 3))

  const [items, setItems] = useState(products)
  console.log(items.map((item) => item.price))

  return (
    <div className="wrapper_products">
      <div className="products_category"><h1>Category name</h1></div>
      <div className="products_list">
        {items.map((item) => 
        <div className="product_list_sigle">
          <div className="product_list_sigle_image">
            <Link to={`single-product/${item.id}`}><img src={require('../images/' + item.photo + '.png')} alt="1" /></Link>
          </div>
          <div className="product_list_sigle_descriptions">
          <a href="single-product"><h2>{item.title}.</h2></a>
          <a href="single-product"><h2>{getSymbolFromCurrency(currencY.slice(0, 3))} {(parseFloat(currencY.slice(3)).toFixed(2) * item.price).toFixed(2)}</h2></a>
          </div>
        </div>
        )}
        {/* <div className="product_list_sigle">
          <div className="product_list_sigle_image">
          <a href="single-product"><img src={require('../images/' + '2' + '.png')} alt="2" /></a>
          </div>
          <div className="product_list_sigle_descriptions">
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>$50.00</h2>
          </div>
        </div>
        <div className="product_list_sigle">
          <div className="product_list_sigle_image">
          <a href="single-product"><img src={require('../images/' + '3' + '.png')} alt="3" /></a>
          </div>
          <div className="product_list_sigle_descriptions">
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>$50.00</h2>
          </div>
        </div>
        <div className="product_list_sigle">
          <div className="product_list_sigle_image">
          <a href="single-product"><img src={require('../images/' + '4' + '.png')} alt="4" /></a>
          </div>
          <div className="product_list_sigle_descriptions">
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>$50.00</h2>
          </div>
        </div>
        <div className="product_list_sigle">
          <div className="product_list_sigle_image">
          <a href="single-product"><img src={require('../images/' + '1' + '.png')} alt="1" /></a>
          </div>
          <div className="product_list_sigle_descriptions">
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>$50.00</h2>
          </div>
        </div>
        <div className="product_list_sigle">
          <div className="product_list_sigle_image">
          <a href="single-product"><img src={require('../images/' + '2' + '.png')} alt="2" /></a>
          </div>
          <div className="product_list_sigle_descriptions">
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>$50.00</h2>
          </div>
        </div> */}
      </div>
    </div >
  )
}

export default Products