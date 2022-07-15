import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setItemS, deleteItemS, setSize, setColor } from '../actions';
import { Link } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';

const Cart = () => {

    const itemS = useSelector(state => state.itemS);
    const currencY = useSelector(state => state.currency);
    const dispatch = useDispatch();

    //console.log(itemS)
    const [items, setItems] = useState([]);
    const [items1, setItems1] = useState([]);
    const [emptyCart, setEmptyCart] = useState(true);
    const [price, setPrice] = useState();
    const [orderr, setOrderr] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("cart") === "[]") {
            setItems(localStorage.getItem("cart"))
            //setItems([])
            setEmptyCart(false)
        } else {
            setItems(JSON.parse(localStorage.getItem("cart")))
            setEmptyCart(true)
        }
    }, [itemS])
    useEffect(() => {
        if (emptyCart === true) {
            const pricePrice = itemS.map((price) => {
                return price.price
            })
            const total = pricePrice.reduce((a, b) => a + b, 0)
            setPrice(total)
        }
    }, [itemS])

    useEffect(() => {
        if (emptyCart === true) {
            //Array of titles

            const titleTitle = itemS.map((item) => {
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
            for (let i = 0; i < itemS.length; i++) {
                finalFiltered.push(itemS.findIndex((item) => item.title === filtered[i]))
            }

            //Array of indexes ( !==-1 ) of filtered titles

            const finalFiltered1 = finalFiltered.filter((item) => item !== -1)
            console.log(finalFiltered1)

            //Final Array of objects

            let finalFinal = [];
            finalFiltered1.map((item) => {
                finalFinal.push(itemS[item])
            })

            console.log(finalFinal)
            return setItems1(finalFinal)
        }
    }, [itemS])

    const sendToCart = (item) => {
        dispatch(setItemS({ ...item, "time": Date.now() }))
    }

    const deleteToCart = (item, index) => {
        dispatch(deleteItemS(item))
        console.log(item)
    }
    console.log(itemS)
    localStorage.setItem("cart", JSON.stringify(itemS))

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

    const sendOrder = () => {
        alert(JSON.stringify({itemS, "total": getSymbolFromCurrency(currencY.slice(0, 3)) + (parseFloat(currencY.slice(3)).toFixed(2) * price).toFixed(2)}))
        localStorage.removeItem("cart")
    }

    console.log(localStorage.getItem("cart"))
    return (
        <div className="wrapper_cart">
            <form action='/cart'>
                <h1>Cart</h1>
                {emptyCart ?
                    <div className="cart_section">
                        {items1.map((item, index) =>
                            <div className="cart_section_single_product_1">
                                <div className="cart_section_single_product_1_options">
                                    <h1>{item.title}</h1>
                                    <h2>{item.title}</h2>
                                    <h3>{getSymbolFromCurrency(currencY.slice(0, 3))}{(parseFloat(currencY.slice(3)).toFixed(2) * item.price).toFixed(2)}</h3>
                                    <h4>SIZE:{item.size}</h4>
                                    {/* <div className="cart_section_single_product_1_options_size"  onChange={selectHandle}> */}                                   
                                    <select name="size" className="cart_section_single_product_1_options_size_select" size="8" onClick={(e) => addSize(item, e)} required>
                                    {item.allsize.map((size) => <option className="cart_section_single_product_1_options_size_xs" value={size}>{size}</option>)}
                                    </select>     
                                    {/* </div> */}
                                    <h4>COLOR: {item.color}</h4>
                                    {/* <div className="cart_section_single_product_1_options_color"> */}                                                                         
                                        <select name="color" className="cart_section_single_product_1_options_color_select" size="8" tabIndex="-1" onClick={(e) => addColor(item, e)} required>
                                        {item.allcolor.map((color) =><option className="cart_section_single_product_1_options_color_grey" tabIndex="0" onClick={(e) => e.target.style.boxShadow = `0 0 10px 100px ${color} inset`} style={{ backgroundColor: color, color: color }} value={color}></option> )}
                                        </select>
                                    {/* </div> */}
                                </div>
                                <div className="cart_section_single_product_1_options_photo">
                                    <div className="cart_section_single_product_1_options_photo_mount">
                                        <div className="cart_section_single_product_1_options_photo_mount_plus"><span className="cart_section_single_product_1_options_photo_mount_plus" onClick={() => sendToCart(item)}>+</span></div>
                                        <div className="cart_section_single_product_1_options_photo_mount_count">{itemS.filter((itemm) => itemm.title === item.title).length}</div>
                                        <div className="cart_section_single_product_1_options_photo_mount_minus"><span className="cart_section_single_product_1_options_photo_mount_minus" onClick={() => deleteToCart(item)}>-</span></div>
                                    </div>
                                    <div className="cart_section_single_product_1_options_photo_photo"><Link to={`/single-product/${item.id}`}><img src={require('../images/' + item.photo + '.png')} alt="1" /></Link></div>
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
                                <h2>Tax 21%: {getSymbolFromCurrency(currencY.slice(0, 3))}{(((parseFloat(currencY.slice(3)).toFixed(2) * price).toFixed(2)) * 0.21).toFixed(2)}</h2>
                                <h2>Quanity: {itemS.length}</h2>
                                <h2>Total: {getSymbolFromCurrency(currencY.slice(0, 3))}{(parseFloat(currencY.slice(3)).toFixed(2) * price).toFixed(2)}</h2>
                                <div className="cart_section_order_send_button">
                                    <button type="submit" onClick={() => sendOrder()}>Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className="cart_section"><h2>Your cart is empty</h2></div>}
                    {orderr ? <div>Thank You for Your order</div> : " "}
            </form>
            {/* {orderr ? <div>Thank You for Your order</div> : " "} */}
        </div>
    )
}

export default Cart