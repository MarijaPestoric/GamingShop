import { Container, Row, Col, Button } from "react-bootstrap";
import Background from '../images/shutterstock_1430260730-removebg-preview.png';
import Sample from '../images/sample.jpg'
import Arrow from '../images/next.png'
// import SearchIcon from '../images/'
import './Home.css'
export default function Home() {
    return (
        <>
            <Container style={{ overflow: 'hidden', margin: '0', minWidth: '100%' }} >
                <Row style={{ textAlign: 'left', paddingTop: '5rem' }} className="main-container">
                    <Col>
                        <h1 className="main-title">Gaming Empire</h1>
                        <p className="main-paragraph"> a wide assortment to fit every type of gamer.</p>
                        <div className="mb-2 buttons">
                            <Button className="btn-shop" variant="dark" size="lg">
                                SHOP NOW
                            </Button>{' '}
                            <Button className="btn-second" variant="light" size="lg">
                                BUTTON
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <img className="background-image" src={Background} alt=""></img>
                    </Col>
                </Row>
                <Row className="new-in-container">
                    <hr className="hr-number"></hr> 01.
                    <h2 className='new-in-title'>New in shop.</h2>
                    <Row className="mx-auto">
                        <Col className='new-in-container__img '> <img src={Sample} width='100%'></img></Col>
                        <Col className='new-in-container__img'> <img src={Sample} width='100%'></img></Col>
                        <Col className='new-in-container__img'> <img src={Sample} width='100%'></img></Col>
                    </Row>
                    <Row className="mx-auto" >
                        <Col className='new-in-container__img first'>
                            Lorem ipsum dolor sit amet, elit amet consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, elit amet consectetur adipiscing elit.
                            <Button className="see-all-btn" variant="dark" size="lg">
                                See all <img src={Arrow} className='arrow-for-btn' width='20px'></img>
                            </Button>
                        </Col>
                        <Col className='new-in-container__img'> <img src={Sample} width='100%'></img></Col>
                        <Col className='new-in-container__img'> <img src={Sample} width='100%'></img></Col>
                    </Row>
                </Row>
                <Row className="newsletter">
                    <hr className="hr-number-2"></hr><p>02.</p>
                    <h2 className='newsletter-title'>Let's stay in touch.</h2>
                    <p className="newsletter-paragraph">Join our newslatter so that we reach out to you <br/> with our best news and offers.</p>
                    <Row>
                        <Col style={{textAlign: 'left'}}>
                            <p className="newsletter-label">Enter your email here:</p>
                            <form>
                                <input type='text' className="newsletter-input">

                                </input>
                                <button type="submit" className="newsletter-button">Submit</button>
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


