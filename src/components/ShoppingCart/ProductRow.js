import { Row, Col } from 'react-bootstrap';
import { useState } from "react";
import CartService from '../../services/cart.service';

const ProductRow = ({product, removeProductFromCart}) => {
    let productPrice = (product.new_price*product.quantity).toFixed(2);

    return (
    <Row className='shopping-cart-container__img'>
        <Col>
            <img className='shopping-cart-img'
                src={product.image}
                alt={product.title}
                width='200px'
            />
        </Col>
        <Col className='shopping-cart-desc'>
            <div>
                <p style={{ padding: '0', margin: '0', fontWeight: '600' }}>
                   {product.title}
                </p>
                <p>Quantity: {product.quantity}</p>
                <p style={{ fontSize: '14px' }}>
                    {product.currency}{productPrice}
                </p>
            </div>
            <button onClick={() => removeProductFromCart(product)}
                    className='remove-btn'
            >
                Remove
            </button>
        </Col>
    </Row>
    )
};

export default ProductRow;