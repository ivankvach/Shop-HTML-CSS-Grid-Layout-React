import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import products from '../data';
import { increment, setItemS, deleteItemS, setSize, setColor } from '../actions';
import getSymbolFromCurrency from 'currency-symbol-map';

const SingleProduct = () => {

    const itemS = useSelector(state => state.itemS);
    const currencY = useSelector(state => state.currency);
    const dispatch = useDispatch();

    const { id } = useParams();
    const [items, setItems] = useState(products);
    const [toCart, setToCart] = useState([])
    useEffect(() => {
        if (localStorage.getItem("cart") === "") {
            setToCart(localStorage.getItem("cart"))
        } else {
            setToCart(JSON.parse(localStorage.getItem("cart")))
        }
    }, [])

    const sendToCart = (item) => {
        console.log(toCart)
        setToCart(((prev) => [...prev, item]))
        dispatch(increment())
        dispatch(setItemS({...item, "time": Date.now()}))
    }
    if (toCart.length === 0) {
        console.log(toCart);
    } else {
        localStorage.setItem("cart", JSON.stringify(itemS))
    }

    const addSize = (item, e) => {
        const itemSize = { ...item, "size": e.target.value }
        console.log(itemSize)
        dispatch(setSize(itemSize))
    }

    const addColor = (item, e) => {
        const itemColor = { ...item, "color": e.target.value }
        console.log(itemColor)
        dispatch(setColor(itemColor))
    }

    console.log(items)
    return (
        <>
            {items.filter((item) => item.id === id).map((item) =>
                <div className="wrapper_single_product">
                    <div className="single_product_left_section">
                        <div className="single_product_left_section_images"><img src={require('../images/' + item.photo + '.png')} alt="1" /></div>
                        <div className="single_product_left_section_images"><img src={require('../images/' + item.photo + '.png')} alt="1" /></div>
                        <div className="single_product_left_section_images"><img src={require('../images/' + item.photo + '.png')} alt="1" /></div>
                    </div>
                    <div className="single_product_center_section"><img src={require('../images/' + item.photo + '.png')} alt="1" /></div>
                    <div className="single_product_right_section">
                        <h2>{item.title}</h2>
                        <h2 className="title">{item.title}</h2>
                        <h4>SIZE:</h4>
                        {/* <div className="single_product_right_section_options_size"> */}
                        <select name="size" className="cart_section_single_product_1_options_size_select" size="8" onClick={(e) => addSize(item, e)} required>
                                    {item.allsize.map((size) => <option className="cart_section_single_product_1_options_size_xs" value={size}>{size}</option>)}
                                    </select>   
                            {/* <div className="single_product_right_section_options_size_xs">xs</div>
                            <div className="single_product_right_section_options_size_s">s</div>
                            <div className="single_product_right_section_options_size_m">m</div>
                            <div className="single_product_right_section_options_size_l">l</div> */}
                        {/* </div> */}
                        <h4>COLOR:</h4>
                        {/* <div className="single_product_right_section_options_color"> */}
                        <select name="color" className="cart_section_single_product_1_options_color_select" size="8" tabindex="-1" onClick={(e) => addColor(item, e)} required>
                                        {item.allcolor.map((color) =><option className="cart_section_single_product_1_options_color_grey" tabindex="0" onClick={(e) => e.target.style.boxShadow = `0 0 10px 100px ${color} inset`} style={{ backgroundColor: color, color: color }} value={color}></option> )}
                                        </select>
                            {/* <div className="single_product_right_section_options_color_grey"></div>
                            <div className="single_product_right_section_options_color_black"></div>
                            <div className="single_product_right_section_options_color_green"></div> */}
                        {/* </div> */}
                        <h4>PRICE:</h4>
                        <h3 className="prise">{getSymbolFromCurrency(currencY.slice(0, 3))}{(parseFloat(currencY.slice(3)).toFixed(2) * item.price).toFixed(2)}</h3>
                        <div className="single_product_right_section_options_button">
                            <button onClick={() => sendToCart(item)}>Send to Cart</button>
                        </div>
                        <div className="single_product_right_section_options_paragraph">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam impedit hic aliquid officia sunt! Placeat repellendus quis est officiis maiores quasi eaque aut facilis mollitia. Quisquam, eos. Cumque, cum? Quod cupiditate odit excepturi exercitationem cum porro, velit est unde culpa? Fugit et laudantium, nisi temporibus corrupti minus iure unde commodi?</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SingleProduct