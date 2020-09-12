import React from 'react'
import './Product.css'

function Product({image, title, type, price}) {
    // TODO:
    // make an on scroll event --> scroll
    return (
        <div className="product">
            <img src={image} alt="" />
            <div className="product-info">
                <div className="info-left">
                    <strong>{title}</strong>
                    <small>{type}</small>
                </div>
                <div className="info-right">
                    ${price}
                </div>
            </div>
        </div>
    )
}

export default Product
