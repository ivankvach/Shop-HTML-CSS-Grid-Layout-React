import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import products from '../data';
import { increment } from '../actions';

const SingleProduct = () => {

    const counter = useSelector(state => state.counter);
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
    }
    if (toCart.length === 0) {
        console.log(toCart);
    } else {
        localStorage.setItem("cart", JSON.stringify(toCart))
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
                        <div className="single_product_right_section_options_size">
                            <div className="single_product_right_section_options_size_xs">xs</div>
                            <div className="single_product_right_section_options_size_s">s</div>
                            <div className="single_product_right_section_options_size_m">m</div>
                            <div className="single_product_right_section_options_size_l">l</div>
                        </div>
                        <h4>COLOR:</h4>
                        <div className="single_product_right_section_options_color">
                            <div className="single_product_right_section_options_color_grey"></div>
                            <div className="single_product_right_section_options_color_black"></div>
                            <div className="single_product_right_section_options_color_green"></div>
                        </div>
                        <h4>PRICE:</h4>
                        <h3 className="prise">${item.price}</h3>
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