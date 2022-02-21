import { Row, Container, Col, Form, Button } from 'react-bootstrap'
import './Checkout.css'
import BillingIllustration from '../images/billing.png'
function Checkout() {
    return (
        <>
            <Container style={{ overflow: 'hidden', margin: '0', padding: '0', minWidth: '100%' }}>
                <Row className='checkout-container'>
                    <Col lg='6'>
                        <h2 className="title checkout-title">Payment Details.</h2>
                        <Form className='checkout-form'>
                            <label className="checkout-label form-label" htmlFor="full-name">Full Name</label>
                            <input className='checkout-input form-input' id="full-name" type="text"></input>
                            <label className="checkout-label form-label" htmlFor="billing-address">Billing address</label>
                            <input className='checkout-input form-input' id="billing-address" type="text"></input>
                            <label className="checkout-label form-label" htmlFor="card-name">Name on Card</label>
                            <input className='checkout-input form-input' id="card-name" type="text"></input>
                            <label className="checkout-label form-label" htmlFor="card-number">Card Number</label>
                            <input className='checkout-input form-input' id="card-number" type="text" placeholder='0000 - 0000 - 0000 - 0000'></input>
                            <label className="checkout-label form-label" htmlFor="cvv">CVV Number</label>
                            <input className='checkout-input form-input' id="cvv" type="number" placeholder='cvv'></input>
                            <label className="checkout-label form-label" htmlFor="exp-date">EXP. date</label>
                            <input className='checkout-input form-input' id="exp-date" type="text" placeholder='month/year'></input>
                            <Button className="btn-checkout" variant="dark" size="lg">
                                CHECKOUT
                            </Button>
                        </Form>
                    </Col>
                    <Col lg='6'>
                        <img className='billing-illustration' src={BillingIllustration} alt='billing'></img>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Checkout;