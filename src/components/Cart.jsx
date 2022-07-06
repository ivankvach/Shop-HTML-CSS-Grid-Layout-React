import React from 'react'
import { useState, useEffect } from 'react'

const Cart = () => {

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
    console.log(items.filter((item) => item.title === "Pink Dress").length)
    
    
    return (
        <div className="wrapper_cart">
            <h1>Cart</h1>
            {emptyCart ?
            <div className="cart_section">
                {items1.map((item) => 
                <div className="cart_section_single_product_1">
                    <div className="cart_section_single_product_1_options">
                        <h1>{item.title}</h1>
                        <h2>{item.title}</h2>
                        <h3>${item.price}</h3>
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
                            <div className="cart_section_single_product_1_options_photo_mount_count">{items.filter((itemm) => itemm.title === item.title).length}</div>
                            <div className="cart_section_single_product_1_options_photo_mount_minus"><span className="cart_section_single_product_1_options_photo_mount_minus">-</span></div>
                        </div>
                        <div className="cart_section_single_product_1_options_photo_photo"><a href="single-product"><img src={require('../images/' + item.photo + '.png')} alt="1" /></a></div>
                    </div>
                </div>
                )}
                {/* <div className="cart_section_single_product_1">
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
                </div> */}
                <div className="cart_section_order_send">
                    <div className="cart_section_order_send_left_section">
                    <h2>Tax 21%: {price * 0.21}$</h2>
                    <h2>Quanity: {items.length}</h2>
                    <h2>Total: {price}$</h2>
                    <div className="cart_section_order_send_button">
                        <button>Order</button>
                    </div>
                </div>
                </div>
            </div>
            : <div className="cart_section"><h2>Your cart is empty</h2></div>}
        </div>
    )
}

export default Cart