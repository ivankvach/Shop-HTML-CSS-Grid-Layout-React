import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItemS, deleteItemS, setSize, setColor, turnCart } from '../actions';
import { Link } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';

const MiniCart = () => {

    const itemS = useSelector(state => state.itemS);
    const currencY = useSelector(state => state.currency);
    const dispatch = useDispatch();

    const [items, setItems] = useState([]);
    const [items1, setItems1] = useState([]);
    const [emptyCart, setEmptyCart] = useState(true);
    const [price, setPrice] = useState();
    //console.log(items)
    useEffect(() => {
        if (localStorage.getItem("cart") === "[]") {
            setItems(localStorage.getItem("cart"))
            setEmptyCart(false)
        } else {
            setItems(JSON.parse(localStorage.getItem("cart")))
            setEmptyCart(true)
        }
    }, [])
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

    const hideCover = () => {
        dispatch(turnCart())
    }

    const sendOrder = () => {
        alert(JSON.stringify(itemS))
    }
    console.log(itemS)
    console.log(emptyCart)
    return (
        <div className="wrapper_minicart">
            <h3 id="wrapper_minicart_title">My Bag, {itemS.length} items</h3>
            {emptyCart ?
                <div className="minicart_section">
                    {items1.map((item) =>
                        <div className="minicart_section_single_product_1">
                            <div className="minicart_section_single_product_1_options">
                                <p>{item.title}</p>
                                <p>{item.title}</p>
                                <h3>{getSymbolFromCurrency(currencY.slice(0, 3))}{(parseFloat(currencY.slice(3)).toFixed(2) * item.price).toFixed(2)}</h3>
                                <h4>SIZE:{item.size}</h4>
                                <select name="size" className="minicart_section_single_product_1_options_size_select" size="8" onClick={(e) => addSize(item, e)} required>
                                    {item.allsize.map((size) => <option className="cart_section_single_product_1_options_size_xs" value={size}>{size}</option>)}
                                </select>
                                <h4>COLOR:{item.color}</h4>
                                <select name="color" className="minicart_section_single_product_1_options_color_select" size="8" tabindex="-1" onClick={(e) => addColor(item, e)} required>
                                    {item.allcolor.map((color) => <option className="minicart_section_single_product_1_options_color" tabindex="0" onClick={(e) => e.target.style.boxShadow = `0 0 10px 100px ${color} inset`} style={{ backgroundColor: color, color: color }} value={color}></option>)}
                                </select>
                            </div>
                            <div className="minicart_section_single_product_1_options_photo">
                                <div className="minicart_section_single_product_1_options_photo_mount">
                                    <div className="minicart_section_single_product_1_options_photo_mount_plus"><span className="minicart_section_single_product_1_options_photo_mount_plus" onClick={() => sendToCart(item)}>+</span></div>
                                    <div className="minicart_section_single_product_1_options_photo_mount_count">{itemS.filter((itemm) => itemm.title === item.title).length}</div>
                                    <div className="minicart_section_single_product_1_options_photo_mount_minus"><span className="minicart_section_single_product_1_options_photo_mount_plus" onClick={() => deleteToCart(item)}>-</span></div>
                                </div>
                                <div className="cart_section_single_product_1_options_photo_photo"><Link to={`single-product/${item.id}`}><img src={require('../images/' + item.photo + '.png')} alt="1" /></Link></div>
                            </div>
                        </div>
                    )}
                    <div className="minicart_section_order_send">
                        <div className="minicart_section_order_send_left_section">
                            <h2>Total</h2>
                            <div className="minicart_section_order_send_button">
                                <button className="minicart_section_order_send_button_back" onClick={() => hideCover()}>Hide</button>
                            </div>
                        </div>
                        <div className="minicart_section_order_send_right_section">
                            <h2>{getSymbolFromCurrency(currencY.slice(0, 3))}{(parseFloat(currencY.slice(3)).toFixed(2) * price).toFixed(2)}</h2>
                            <div className="minicart_section_order_send_button">
                                <Link to="cart" className="minicart_section_order_send_button_order"  onClick={() => hideCover()}>Order</Link>
                            </div>
                            <div />
                        </div>
                    </div>
                </div>
                : <h2>Your cart is empty</h2>}
        </div>
    )
}

export default MiniCart