import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MiniCart = () => {
    console.log(JSON.parse(localStorage.getItem("cart")));
    const [items, setItems] = useState([JSON.parse(localStorage.getItem("cart"))])
    return (
        <div className="wrapper_minicart">
            <h1>Cart</h1>
            <div className="minicart_section">
                {items.map((item) => 
                <div className="minicart_section_single_product_1">
                    <div className="minicart_section_single_product_1_options">
                        <h3>{item.title}</h3>
                        <h4>{item.title}</h4>
                        <h3>${item.price}</h3>
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
                        <h2>200$</h2>
                        <div className="minicart_section_order_send_button">
                        <Link to="cart" className="minicart_section_order_send_button_order">Order</Link>
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniCart