import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import './ShoppingCart.css';
import Sample from '../images/sample.jpg'
function ShoppingCart() {
    return (
        <Container style={{ textAlign: 'left', backgroundColor: '#EDF2F4', overflow: 'hidden', margin: '0', minWidth: '100%' }}>
            <Row lg='12' className='cart-container'>
                <h2 className='cart-title'>Shopping cart.</h2>
                <Col lg='9' md='12'>
                    <Row className='shopping-cart-container__img'>
                        <Col>
                            <img className='shopping-cart-img' src={Sample} alt='' width='200px'></img>
                        </Col>
                        <Col className='shopping-cart-desc'>
                            <div>
                                <p style={{ padding: '0', margin: '0', fontWeight: '600' }}>Name, product ID</p>
                                <p style={{ fontSize: '14px' }}>15,99$</p>
                            </div>
                            <button className='remove-btn'>Remove</button>
                        </Col>
                    </Row>
                    <hr className='hr-cart-product'></hr>
                    <Row className='shopping-cart-container__img'>
                        <Col>
                            <img className='shopping-cart-img' src={Sample} alt='' width='200px'></img>
                        </Col>
                        <Col className='shopping-cart-desc'>
                            <div>
                                <p style={{ padding: '0', margin: '0', fontWeight: '600' }}>Name, product ID</p>
                                <p style={{ fontSize: '14px' }}>21,99$</p>
                            </div>
                            <button className='remove-btn'>Remove</button>
                        </Col>
                    </Row>
                </Col>
                <Col className='checkout-cart' lg='3' md='12' sm='12'>
                    <div>
                        <h3 className='summary-title'>ORDER SUMMARY</h3>
                        <p>Subtotal: <strong className='cart-prices-summary'>37,98$</strong></p>
                        <p>Shipping: <strong className='cart-prices-summary'>6,99$</strong></p>
                        <p style={{ fontWeight: '600' }}>ESTIMATED TOTAL: <strong className='cart-prices-summary'>44,97$</strong></p>
                    </div>
                    <Button className="btn-checkout" variant="dark" size="lg">
                       <Link to='/checkout' style={{color: '#EDF2F4', textDecoration: 'none'}}> CHECKOUT NOW </Link> 
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ShoppingCart; 