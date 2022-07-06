import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MiniCart = () => {

    const [items, setItems] = useState([]);
    const [items1, setItems1] = useState([]);
    const [emptyCart, setEmptyCart] = useState(true);
    const [price, setPrice] = useState();
    useEffect(() => {
        if (localStorage.getItem("cart") === "") {
            setItems(localStorage.getItem("cart"))
            setEmptyCart(false)
        } else {
            setItems(JSON.parse(localStorage.getItem("cart")))
            setEmptyCart(true)
        }
    }, [])
    useEffect(() => {
        if (emptyCart === true) {
        const pricePrice = items.map((price) => {
            return price.price
        })
        const total = pricePrice.reduce((a, b) => a + b, 0)
        setPrice(total)
    }
    }, [items])

    useEffect(() => {
        if (emptyCart === true) {
        //Array of titles
        
            const titleTitle = items.map((item) => {
              return item.title
            })
            console.log(titleTitle)
        
        //Array of filtered titles
        
            const filtered = titleTitle.filter((item, index) => {
            
            return titleTitle.indexOf(item) === index;
            
            });
            console.log(filtered)
        
        //Array of indexes of filtered titles
        
            let finalFiltered = [];
            for (let i = 0; i < items.length; i++) {
              finalFiltered.push(items.findIndex((item) => item.title === filtered[i]))
            }
        
        //Array of indexes ( !==-1 ) of filtered titles
        
            const finalFiltered1 = finalFiltered.filter((item) => item !== -1)
            console.log(finalFiltered1)
        
        //Final Array of objects
        
            let finalFinal = [];
            finalFiltered1.map((item) => {
              finalFinal.push(items[item]) 
            })
            
            console.log(finalFinal)
         return setItems1(finalFinal)
        }
        }, [items])

    console.log(price)
    return (
        <div className="wrapper_minicart">
            <h1>Cart</h1>
            {emptyCart ?
                <div className="minicart_section">
                    {items1.map((item) =>
                        <div className="minicart_section_single_product_1">
                            <div className="minicart_section_single_product_1_options">
                                <h3>{item.title}</h3>
                                <h4>{item.title}</h4>
                                <h3>${item.price}</h3>
                                <h4>SIZE:</h4>
                                <div className="minicart_section_single_product_1_options_size">
                                    <div className="minicart_section_single_product_1_options_size_xs">xs</div>
                                    <div className="minicart_section_single_product_1_options_size_s">s</div>
                                    <div className="minicart_section_single_product_1_options_size_m">m</div>
                                    <div className="minicart_section_single_product_1_options_size_l">l</div>
                                </div>
                                <h4>COLOR:</h4>
                                <div className="minicart_section_single_product_1_options_color">
                                    <div className="minicart_section_single_product_1_options_color_grey"></div>
                                    <div className="minicart_section_single_product_1_options_color_black"></div>
                                    <div className="minicart_section_single_product_1_options_color_green"></div>
                                </div>
                            </div>
                            <div className="minicart_section_single_product_1_options_photo">
                                <div className="minicart_section_single_product_1_options_photo_mount">
                                    <div className="minicart_section_single_product_1_options_photo_mount_plus"><span className="minicart_section_single_product_1_options_photo_mount_plus">+</span></div>
                                    <div className="minicart_section_single_product_1_options_photo_mount_count">1</div>
                                    <div className="minicart_section_single_product_1_options_photo_mount_minus"><span className="minicart_section_single_product_1_options_photo_mount_plus">-</span></div>
                                </div>
                                <div className="cart_section_single_product_1_options_photo_photo"><a href="single-product"><img src={require('../images/' + item.photo + '.png')} alt="1" /></a></div>
                            </div>
                        </div>
                    )}
                    {/* <div className="minicart_section_single_product_1">
                    <div className="minicart_section_single_product_1_options">
                        <h3>Lorem, ipsum dolor.</h3>
                        <h4>Lorem ipsum dolor sit.</h4>
                        <h3>$50.00</h3>
                        <h4>SIZE:</h4>
                        <div className="minicart_section_single_product_1_options_size">
                            <div className="cart_section_single_product_1_options_size_xs">xs</div>
                            <div className="cart_section_single_product_1_options_size_s">s</div>
                            <div className="cart_section_single_product_1_options_size_m">m</div>
                            <div className="cart_section_single_product_1_options_size_l">l</div>
                        </div>
                        <h4>COLOR:</h4>
                        <div className="minicart_section_single_product_1_options_color">
                            <div className="minicart_section_single_product_1_options_color_grey"></div>
                            <div className="minicart_section_single_product_1_options_color_black"></div>
                            <div className="minicart_section_single_product_1_options_color_green"></div>
                        </div>
                    </div>
                    <div className="minicart_section_single_product_1_options_photo">
                        <div className="minicart_section_single_product_1_options_photo_mount">
                            <div className="minnicart_section_single_product_1_options_photo_mount_plus">+</div>
                            <div className="minicart_section_single_product_1_options_photo_mount_count">1</div>
                            <div className="minicart_section_single_product_1_options_photo_mount_minus">-</div>
                        </div>
                        <div className="cart_section_single_product_1_options_photo_photo"><a href="single-product"><img src={require('../images/' + '2' + '.png')} alt="1" /></a></div>
                    </div>
                </div> */}
                    <div className="minicart_section_order_send">
                        <div className="minicart_section_order_send_left_section">
                            <h2>Total</h2>
                            <div className="minicart_section_order_send_button">
                                <button className="minicart_section_order_send_button_back">Back</button>
                            </div>
                        </div>
                        <div className="minicart_section_order_send_right_section">
                            <h2>{price}$</h2>
                            <div className="minicart_section_order_send_button">
                                <Link to="cart" className="minicart_section_order_send_button_order">Order</Link>
                            </div>
                            <div />
                        </div>
                    </div>
                </div>
                : "Your cart is empty"}
        </div>
    )
}

export default MiniCart