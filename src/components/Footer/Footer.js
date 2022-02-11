import { Container, Row, Col, Nav } from 'react-bootstrap'
import LogoLight from '../images/logo-light.png'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'
import Linkedin from '../images/linkedin.png'
import Pinterest from '../images/pinterest.png'
import './Footer.css'
function Footer() {
    return (
        <Container style={{ overflow: 'hidden', margin: '0', minWidth: '100%', color: '#EDF2F4' }} >
            <Row style={{ textAlign: 'left', backgroundColor: '#080809', padding: '5rem 7rem' }} className='footer-container'>
                <Col lg='6' md='6' sm='12'>
                    <img src={LogoLight} alt='' width='200px' className='pt-0'></img>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p>Social media</p>
                    <Col className='mt-2 pt-2 social-icons'>
                        <img src={Linkedin} className='m-1' alt='' width='32px'></img>
                        <img src={Facebook} className='m-1' alt='' width='32px'></img>
                        <img src={Instagram} className='m-1' alt='' width='32px'></img>
                        <img src={Pinterest} className='m-1' alt='' width='32px'></img>
                    </Col>
                </Col>
                <Col style={{textAlign: 'right'}} className='mt-5 pt-5 footer-navbar' lg='6' md='6' sm='12'>
                    <Nav.Link href="#" className='footer-nav'>Home</Nav.Link>
                    <Nav.Link href="#" className='footer-nav'>Products</Nav.Link>
                    <Nav.Link href="#" className='footer-nav'>About</Nav.Link>
                    <Nav.Link href="#" className='footer-nav'>Contact</Nav.Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;