import MailchimpSubscribe from "react-mailchimp-subscribe"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import Background from '../images/shutterstock_1430260730-removebg-preview.png';
import Arrow from '../images/next.png'
import './Home.css'
export default function Home() {
    const [newestProducts, setNewestProducts] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:3001/newest")
            .then((res) => {
                console.log(res.data);
                setNewestProducts(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <Container style={{ overflow: 'hidden', margin: '0', minWidth: '100%' }} className='home-container'>
                <Row style={{ textAlign: 'left', paddingTop: '5rem' }} className="main-container">
                    <Col lg="6" md="12">
                        <h1 className="main-title">Gaming Empire</h1>
                        <p className="main-paragraph"> a wide assortment to fit every type of gamer.</p>
                        <div className="mb-2 buttons">
                            <Link to='/products'><Button className="btn-shop" variant="dark" size="lg">
                                SHOP NOW
                            </Button></Link>{' '}
                            <Link to='/login'><Button className="btn-second" variant="light" size="lg">
                                LOGIN
                            </Button></Link>
                        </div>
                    </Col>
                    <Col lg="6" md="12" >
                        <img className="background-image" src={Background} alt=""></img>
                    </Col>
                </Row>
                <Row className="new-in-container">
                    <hr className="hr-number-01" style={{ width: '3rem' }}></hr> 01.
                    <h2 className='title'>New in shop.</h2>
                    <Row className="mx-auto" style={{ marginTop: '2rem' }}>
                        {newestProducts.map(product => (
                            <Col className='new-in-container__img' lg='4' md='6' sm='12'> <img src={product.imageURL} className='new-in-product-image' width='100%' height="100%" alt="product"></img></Col>
                        ))}
                        <Col className='new-in-container__img new-in-container__img-text' lg='4' md='6' sm='12'>
                            Lorem ipsum dolor sit amet, elit amet consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, elit amet consectetur adipiscing elit.
                            <Link to='/products'>
                                <Button className="see-all-btn" variant="dark" size="lg">
                                    See all <img src={Arrow} className='arrow-for-btn' width='20px' alt=">"></img>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Row>
                <Row className="newsletter">
                    <Row>
                        <Col>
                            <p className="number-2">02.</p>
                            <hr className="hr-number-2"></hr>
                        </Col>
                        <h2 className='title'>Let's stay in touch.</h2>
                        <p className="newsletter-paragraph">Join our newslatter so that we reach out to you <br /> with our best news and offers.</p>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'left' }}>
                            <p className="newsletter-label">Enter your email here:</p>
                            <form action={process.env.REACT_APP_MAILCHIMP_URL} method="post" novalidate>
                                <input  type="email" name="EMAIL" className="newsletter-input">
                                </input>
                                <button type="submit" value="Subscribe" name="subscribe" className="newsletter-button">Submit</button>
                            </form>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Row>
            </Container>


        </>
    );
}


