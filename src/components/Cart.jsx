import React from 'react'

const Cart = () => {
    return (
        <div className="wrapper_cart">
            <h1>Cart</h1>
            <div className="cart_section">
                <div className="cart_section_single_product_1">
                    <div className="cart_section_single_product_1_options">
                        <h1>Lorem, ipsum dolor.</h1>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h3>$50.00</h3>
                        <h4>SIZE:</h4>
                        <div className="cart_section_single_product_1_options_size">
                            <div className="cart_section_single_product_1_options_size_xs">xs</div>
                            <div className="cart_section_single_product_1_options_size_s">s</div>
                            <div className="cart_section_single_product_1_options_size_m">m</div>
                            <div className="cart_section_single_product_1_options_size_l">l</div>
                        </div>
                        <h4>COLOR:</h4>
                        <div className="cart_section_single_product_1_options_color">
                            <div className="cart_section_single_product_1_options_color_grey"></div>
                            <div className="cart_section_single_product_1_options_color_black"></div>
                            <div className="cart_section_single_product_1_options_color_green"></div>
                        </div>
                    </div>
                    <div className="cart_section_single_product_1_options_photo">
                        <div className="cart_section_single_product_1_options_photo_mount">
                            <div className="cart_section_single_product_1_options_photo_mount_plus"><span className="cart_section_single_product_1_options_photo_mount_plus">+</span></div>
                            <div className="cart_section_single_product_1_options_photo_mount_count">1</div>
                            <div className="cart_section_single_product_1_options_photo_mount_minus"><span className="cart_section_single_product_1_options_photo_mount_minus">-</span></div>
                        </div>
                        <div className="cart_section_single_product_1_options_photo_photo"><a href="single-product"><img src={require('../images/' + '1' + '.png')} alt="1" /></a></div>
                    </div>
                </div>
                <div className="cart_section_single_product_1">
                    <div className="cart_section_single_product_1_options">
                        <h1>Lorem, ipsum dolor.</h1>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h3>$50.00</h3>
                        <h4>SIZE:</h4>
                        <div className="cart_section_single_product_1_options_size">
                            <div className="cart_section_single_product_1_options_size_xs">xs</div>
                            <div className="cart_section_single_product_1_options_size_s">s</div>
                            <div className="cart_section_single_product_1_options_size_m">m</div>
                            <div className="cart_section_single_product_1_options_size_l">l</div>
                        </div>
                        <h4>COLOR:</h4>
                        <div className="cart_section_single_product_1_options_color">
                            <div className="cart_section_single_product_1_options_color_grey"></div>
                            <div className="cart_section_single_product_1_options_color_black"></div>
                            <div className="cart_section_single_product_1_options_color_green"></div>
                        </div>
                    </div>
                    <div className="cart_section_single_product_1_options_photo">
                        <div className="cart_section_single_product_1_options_photo_mount">
                        <div className="cart_section_single_product_1_options_photo_mount_plus"><span className="cart_section_single_product_1_options_photo_mount_plus">+</span></div>
                            <div className="cart_section_single_product_1_options_photo_mount_count">1</div>
                            <div className="cart_section_single_product_1_options_photo_mount_minus"><span className="cart_section_single_product_1_options_photo_mount_minus">-</span></div>
                        </div>
                        <div className="cart_section_single_product_1_options_photo_photo"><a href="single-product"><img src={require('../images/' + '2' + '.png')} alt="1" /></a></div>
                    </div>
                </div>
                <div className="cart_section_order_send">
                    <div className="cart_section_order_send_left_section">
                    <h2>Lorem, ipsum dolor.</h2>
                    <h2>Lorem, ipsum dolor.</h2>
                    <h2>Lorem, ipsum dolor.</h2>
                    <div className="cart_section_order_send_button">
                        <button>Order</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cart