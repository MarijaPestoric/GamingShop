import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios';
import './Register.css'
import RegisterImg from '../images/register-img.png'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [customers, setCustomers] = useState([])
    const history = useHistory()
    const [formFields, setFormFields] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange =(e) => {
        console.log(e.target.value)
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = formFields;
        (!formFields.firstName || !formFields.lastName || !formFields.username || !formFields.email || !formFields.password || !formFields.confirmPassword) ? (
            toast.error('You must fill in all the fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        ) : formFields.password === formFields.confirmPassword ? 
        (axios
            .post("http://localhost:3001/customers", customer)
            .then(res => {
                setCustomers([...customers, customer])
                console.log(res.data)
            })
            .catch(e => {
                console.log("Neuspjesno!" + e)
            })
            (toast.success('Registered successfully.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
         (history.push('/products')))
           ) : (toast.error("Passwords don't match", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }))
    }
    return (<>
        <Container style={{ backgroundColor: '#edf2f4', overflow: 'hidden', margin: '0', minWidth: '100%' }}>
            <Row className='register-container'>
                <Col className='register-image__container'>
                    <img className='register-image' src={RegisterImg} alt='register' width='90%'>
                    </img>
                </Col>
                <Col p-2>
                    <Form className='register-form' onSubmit={handleSubmit}>
                        <h2 className='title' style={{marginBottom: '2rem'}} >Register.</h2>
                        <label className="login-label name-input" htmlFor="first-name">First Name</label>
                        <input className='register-input form-input' name='firstName' value={formFields.firstName} id="first-name" type="text" onChange={handleChange}></input>
                        <label className="login-label name-input" htmlFor="last-name">Last Name</label>
                        <input className='register-input form-input' name='lastName' value={formFields.lastName} id="last-name" type="text" onChange={handleChange}></input>
                        <label className="login-label" htmlFor="username">Username</label>
                        <input className='register-input form-input' name='username' value={formFields.userame} id="username" type="text" onChange={handleChange}></input>
                        <label className="login-label" htmlFor="email">Email</label>
                        <input className='register-input form-input' name='email' value={formFields.email} id="email" type="email" onChange={handleChange}></input>
                        <label className="login-label" htmlFor="password">Password</label>
                        <input className='register-input form-input' name='password' value={formFields.password} id="password" type="password" onChange={handleChange}></input>
                        <label className="login-label" htmlFor="confirm-password">Confirm password</label>
                        <input className='register-input form-input' name='confirmPassword' value={formFields.confirmPassword} id="confirm-password" type="password" onChange={handleChange}></input>
                        <Button className='login-button' variant="dark" type="submit">
                            REGISTER
                        </Button>
                        <p className="haveacc-paragraph">Already have account? <Link className='to-register' to="/login">Login</Link></p>
                    </Form>
                </Col>
            </Row>
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'                    
                />
        </Container>
    </>);
}

export default Register;