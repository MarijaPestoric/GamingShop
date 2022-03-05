import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// import { AuthContext } from "../contexts/AuthContext";

import LoginImage from '../images/login-img.png'
function Login() {
    // const { authTokens, setTokens } = useContext(AuthContext);
    const [customers, setCustomers] = useState([])
    const history = useHistory()
    const [formFields, setFormFields] = useState([{
        username: "",
        password: ""
    }])
    useEffect(() => {
        axios
            .get("http://localhost:3001/customers")
            .then((res) => {
                console.log(res.data);
                setCustomers(res.data);
            })
            .catch((e) => console.log(e));
    }, []);
    const handleChange =(e) => {
        console.log(e.target.value)
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const legalPassword = customers.filter(customer=> customer.password == formFields.password).length > 0;
        const legalUsername = customers.filter(customer=> customer.username == formFields.username).length > 0;
        const admin = customers.filter(customer => customer.admin)
        console.log(admin)
        const allFields = formFields.username && formFields.password;
        if(!allFields){
            toast.error('You must fill in all the fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else if (!legalPassword && !legalUsername){
            toast.error('Unknown user. Please try again!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }  else if (admin.filter(cust => cust.username == formFields.username).length>0){
                history.push('/dashboard')
        } else{
            history.push('/products')
        }
       
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formFields);
    //     axios
    //       .post("http://localhost:3001/auth/local", formFields)
    //       .then((result) => {
    //         let { jwt } = result.data;
    //         console.log(jwt);
    //         setTokens(jwt);
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   };
    
    //   if(authTokens){
    //     return <Redirect to="/"></Redirect>
    //   }

    return (
        <Container style={{backgroundColor: '#edf2f4', overflow: 'hidden', margin: '0', minWidth: '100%' }}>
            <Row className='login-container'>
                <Col>
                <img src={LoginImage} alt="" width='150px' className="login-image"></img>
                    <Form className='login-form' onSubmit={handleSubmit}>
                        <label className="login-label" htmlFor="username">Username</label>
                        <input className='login-input form-input' name="username" value={formFields.username} id="username" type="text" onChange={handleChange}></input>
                        <label className="login-label" htmlFor="password">Password</label>
                        <input className='login-input form-input' name="password" value={formFields.password} id="password" type="password" onChange={handleChange}></input>
                        <Button className='login-button' variant="dark" type="submit">
                            LOGIN
                        </Button>
                        <p className="haveacc-paragraph">Don't have account? <Link className="to-register" to='./register'>Register</Link></p>
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
    );
}

export default Login;