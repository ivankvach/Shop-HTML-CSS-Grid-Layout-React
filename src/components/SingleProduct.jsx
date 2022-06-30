import React from 'react'

const SingleProduct = () => {
    return (
        <div className="wrapper_single_product">
            <div className="single_product_left_section">
                <div className="single_product_left_section_images">images1</div>
                <div className="single_product_left_section_images">images2</div>
                <div className="single_product_left_section_images">images3</div>
            </div>
            <div className="single_product_center_section">center</div>
            <div className="single_product_right_section">
                <h1>Lorem, ipsum dolor.</h1>
                <h2>Lorem ipsum dolor sit.</h2>
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
                <h4 className="prise">PRICE:</h4>
                <h3>$50.00</h3>
                <div className="single_product_right_section_options_button">
                    <button>Send to Cart</button>
                </div>
                <div className="single_product_right_section_options_paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam impedit hic aliquid officia sunt! Placeat repellendus quis est officiis maiores quasi eaque aut facilis mollitia. Quisquam, eos. Cumque, cum? Quod cupiditate odit excepturi exercitationem cum porro, velit est unde culpa? Fugit et laudantium, nisi temporibus corrupti minus iure unde commodi?</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct