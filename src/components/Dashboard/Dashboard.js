import { Container, Row, Col, Table, Button, Collapse, Form } from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import '../Home/Home.css'
import './Dashboard.css'
import PeopleBrightIcon from '../images/people.png'
import OrdersBrightIcon from '../images/order-delivery.png'
import ProductsBrightIcon from '../images/new-product.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([])
    const [customers, setCustomers] = useState([])
    const [orders, setOrders] = useState([])
    const [onDelivery, setOnDelivery] = useState([])
    const [delivered, setDelivered] = useState([])
    const [productFields, setProductFields] = useState({});
    useEffect(() => {
        axios
            .get("http://localhost:3001/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((e) => console.log(e));
    }, []);
    useEffect(() => {
        axios
            .get("http://localhost:3001/customers")
            .then((res) => {
                console.log(res.data);
                setCustomers(res.data);
            })
            .catch((e) => console.log(e));
    }, []);
    useEffect(() => {
        axios
            .get("http://localhost:3001/orders")
            .then((res) => {
                console.log(res.data);
                setOrders(res.data);
                const onDelivery = res.data.filter(order => order.status === 'On Delivery');
                setOnDelivery(onDelivery)
                const delivered = res.data.filter(order => order.status === 'Delivered');
                setDelivered(delivered)
            })
            .catch((e) => console.log(e));
    }, []);
    // data.datasets.data =[onDelivery.length, delivered.length]

    const handleChange = (e) => {
        console.log(e.target.value)
        setProductFields({ ...productFields, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("TUSAM", productFields)
        const forPost = productFields;
        (!forPost.title || !forPost.price || !forPost.description) ? toast.error('You must fill in all the fields!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }) : ( axios
            .post("http://localhost:3001/products", forPost)
            .then(res => {
                setProducts([...products, forPost])
                console.log(res.data)
                console.log(products)
            })
            .catch(e => {
                console.log("Neuspjesno!" + e)
            })
            (toast.success('Product added successfully.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }))
           )
      
    }
    const data = {
        labels: ['On delivery', 'Delivered'],
        datasets: [
            {
                label: '# of Votes',
                data: [onDelivery.length, delivered.length],
                backgroundColor: [
                    '#FF9E00',
                    '#80ED99',
                ],
                borderColor: [
                    '#FF9E00',
                    '#80ED99',
                ],

            },
        ],
    };

    return (
        <>
            <Container style={{ overflow: 'hidden', margin: '0', padding: '0', minWidth: '100%' }}>
                <Row className='dashboard-container'>
                    <Row style={{ textAlign: 'left' }} lg='6' md='12' sm='12'>
                        <ProSidebar>
                            <Menu iconShape="square" style={{ backgroundColor: '#080809' }}>
                                <h3 className='sidebar-title'>Dashboard.</h3>
                                <MenuItem><img src={PeopleBrightIcon} alt='' width='32px'></img><a href='#dashboard-customers' style={{ color: '#edf2f4' }}> Customers</a></MenuItem>
                                <MenuItem><img src={OrdersBrightIcon} alt='' width='32px'></img><a href='#dashboard-orders' style={{ color: '#edf2f4' }}> Orders</a></MenuItem>
                                <MenuItem><img src={ProductsBrightIcon} alt='' width='32px'></img><a href='#dashboard-products' style={{ color: '#edf2f4' }}> Products</a></MenuItem>
                            </Menu>
                        </ProSidebar>
                        <Col className='dashboard-info-container' lg='9' md='12' sm='12'>
                            <Row lg='4' style={{ marginTop: '.5rem' }}>
                                <Col>
                                    <h2 className='quantity-dashboard'>{orders.length}</h2>
                                    <p>Total orders</p>
                                </Col>
                                <Col>
                                    <h2 className='quantity-dashboard'>{customers.length}</h2>
                                    <p>Total Registered Customers</p>
                                </Col>
                                <Col>
                                    <h2 className='quantity-dashboard'>{products.length}</h2>
                                    <p>Total Products</p>
                                </Col>
                            </Row>
                            <p className='dashboard-summary-title'>Orders summary.</p>
                            <Row lg='6'>
                                <Col>
                                    <h2 className='quantity-dashboard'>{onDelivery.length}</h2>
                                    <p>On delivery</p>
                                </Col>
                                <Col>
                                    <h2 className='quantity-dashboard'>{delivered.length}</h2>
                                    <p>Delivered</p>
                                </Col>
                            </Row>
                            <Row className='chart-container' lg='12' md='12' sm='12'>
                                <Doughnut data={data} />
                            </Row>
                            <Row id='dashboard-customers'>
                                <h4 style={{ fontWeight: '600' }}>Customers</h4>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#id</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.map(customer => (<>
                                            <tr>
                                                <td>{customer.id}</td>
                                                <td>{customer.name}</td>
                                                <td>{customer.lastName}</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.city}</td>
                                            </tr>
                                        </>))}
                                    </tbody>
                                </Table>
                            </Row>
                            <Row id='dashboard-orders'>
                                <h4 style={{ fontWeight: '600' }}>Orders</h4>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#id</th>
                                            <th>Customer ID</th>
                                            <th>Order Date</th>
                                            <th>Order Time</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (<>
                                            <tr>
                                                <td>{order.id}</td>
                                                <td>{order.customerId}</td>
                                                <td>{order.order_date}</td>
                                                <td>{order.order_time}</td>
                                                <td>{order.status}</td>
                                            </tr>
                                        </>))}

                                    </tbody>
                                </Table>
                            </Row>
                            <Row id='dashboard-products'>
                                <Col>
                                    <h4 style={{ fontWeight: '600' }}>Products</h4>
                                </Col>
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    className='button-collapse new-product-button'
                                    variant="dark"
                                >
                                    Add New
                                </Button>
                                <Collapse in={open}>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className='new-product-dashboard'>
                                            <Col>
                                                <label htmlFor='name' className='new-product-label'>Name</label> <br />
                                                <input id='name' type='text' name="title" value={productFields.title} className='form-input' onChange={handleChange} />
                                            </Col>
                                            <Col>
                                                <label htmlFor='price' className='new-product-label'>Price</label>  <br />
                                                <input id='price' type='text' name="price" value={productFields.price} className='form-input' onChange={handleChange} />
                                            </Col>
                                            <Col>
                                                <label htmlFor='description' className='new-product-label'>Description</label>  <br />
                                                <textarea maxLength={250} id='description' name="description" value={productFields.description} className='form-input' onChange={handleChange} />
                                            </Col>
                                            <Button className='new-product-button' variant='dark' type="submit">Submit</Button>
                                        </Row>
                                    </Form>
                                </Collapse>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#id</th>
                                            <th>Product name</th>
                                            <th>Price</th>
                                            <th>Decription</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(product => (<>
                                            <tr>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>€{product.price}</td>
                                                <td>{product.description}</td>
                                            </tr>
                                        </>))}
                                    </tbody>
                                </Table>
                            </Row>
                        </Col>
                    </Row>
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
        </>
    );
}

export default Dashboard;
