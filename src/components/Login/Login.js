import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './Login.css'
import LoginImage from '../images/login-img.png'
function Login() {
    return (
        <Container style={{backgroundColor: '#edf2f4', overflow: 'hidden', margin: '0', minWidth: '100%' }}>
            <Row className='login-container'>
                <Col>
                <img src={LoginImage} alt="" width='150px' className="login-image"></img>
                    <Form className='login-form'>
                        <label className="login-label" htmlFor="username">Username</label>
                        <input className='login-input' id="username" type="text"></input>
                        <label className="login-label" htmlFor="password">Password</label>
                        <input className='login-input' id="password" type="password"></input>
                        <Button className='login-button' variant="dark" type="submit">
                            LOGIN
                        </Button>
                        <p className="haveacc-paragraph">Don't have account? <a href="/register">Register</a></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;