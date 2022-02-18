import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './Register.css'
import RegisterImg from '../images/register-img.png'
function Register() {
    return (<>
        <Container style={{ backgroundColor: '#edf2f4', overflow: 'hidden', margin: '0', minWidth: '100%' }}>
            <Row className='register-container'>
                <Col className='register-image__container'>
                    <img className='register-image' src={RegisterImg} alt='register' width='90%'>
                    </img>
                </Col>
                <Col p-2>
                    <Form className='register-form'>
                        <h2 className='title' style={{marginBottom: '2rem'}} >Register.</h2>
                        <label className="login-label name-input" htmlFor="first-name">First Name</label>
                        <input className='register-input' id="first-name" type="text"></input>
                        <label className="login-label name-input" htmlFor="last-name">Last Name</label>
                        <input className='register-input' id="last-name" type="text"></input>
                        <label className="login-label" htmlFor="username">Username</label>
                        <input className='register-input' id="username" type="text"></input>
                        <label className="login-label" htmlFor="username">Email</label>
                        <input className='register-input' id="username" type="email"></input>
                        <label className="login-label" htmlFor="password">Password</label>
                        <input className='register-input' id="username" type="password"></input>
                        <label className="login-label" htmlFor="password">Confirm password</label>
                        <input className='register-input' id="password" type="password"></input>
                        <Button className='login-button' variant="dark" type="submit">
                            Register
                        </Button>
                        <p className="haveacc-paragraph">Already have account? <Link to="/login">Login</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Register;