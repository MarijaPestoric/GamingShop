import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Home/Home.css';
import './ShoppingCart.css';
function ShoppingCart() {
    const [cartProducts, setCartProducts] = useState([])
    const [subtotal, setSubtotal] = useState(0);
    const [estimatedTotal, setEstimatedTotal] = useState(0);

    useEffect(() => {
        axios
            .get("http://localhost:3001/cart")
            .then((res) => {
                console.log(res.data);
                setCartProducts(res.data);
            })
            .catch((e) => console.log(e));
    }, []);
    useEffect(() => {
        let shipping = 6;
        const totalSummary = cartProducts.reduce((acc, val) => acc + parseFloat(val.price, 10), 0);
        setSubtotal(totalSummary)
        setEstimatedTotal(totalSummary + shipping)
    }, [cartProducts])
    function removeFromCart(id){
      console.log("remove");
      const newCartList = cartProducts.filter((item) => item.id !== id);
      setCartProducts(newCartList);
    }
    return (
        <Container style={{ textAlign: 'left', backgroundColor: '#EDF2F4', overflow: 'hidden', margin: '0', minWidth: '100%' }}>
            <Row lg='12' className='cart-container'>
                <h2 className='cart-title'>Shopping cart.</h2>
                <Col lg='9' md='12'>
                    {cartProducts.length > 0 ? (cartProducts.map(product => (<>
                        <Row className='shopping-cart-container__img'>
                            <Col>
                                <img className='shopping-cart-img' src={product.imageURL} alt='' width='200px'></img>
                            </Col>
                            <Col className='shopping-cart-desc'>
                                <div>
                                    <p style={{ padding: '0', margin: '0', fontWeight: '600' }}>{product.title}, #{product.id}</p>
                                    <p style={{ fontSize: '14px' }}>€{product.price}</p>
                                </div>
                                <button className='remove-btn' onClick={() => removeFromCart(product.id)}>Remove</button>
                            </Col>
                        </Row>
                        <hr className='hr-cart-product'></hr>
                    </>
                    ))) : "There's no products in shopping-cart"}

                </Col>
                <Col className='checkout-cart' lg='3' md='12' sm='12'>
                    <div>
                        <h3 className='summary-title'>ORDER SUMMARY</h3>
                        <p>Subtotal: <strong className='cart-prices-summary'> {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "EUR",
                        }).format(subtotal)}</strong></p>
                        <p>Shipping: <strong className='cart-prices-summary'>{new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "EUR",
                        }).format(6)}</strong></p>
                        <p style={{ fontWeight: '600' }}>ESTIMATED TOTAL: <strong className='cart-prices-summary'>{new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "EUR",
                        }).format(estimatedTotal)}</strong></p>
                    </div>
                    <Button className="btn-checkout" variant="dark" size="lg">
                        <Link to='/checkout' style={{ color: '#EDF2F4', textDecoration: 'none' }}> CHECKOUT NOW </Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ShoppingCart; 