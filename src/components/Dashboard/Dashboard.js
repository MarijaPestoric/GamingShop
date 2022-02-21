import { Container, Row, Col, Table, Button, Collapse, Form } from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'react-pro-sidebar/dist/css/styles.css';
import '../Home/Home.css'
import './Dashboard.css'
import PeopleBrightIcon from '../images/people.png'
import OrdersBrightIcon from '../images/order-delivery.png'
import ProductsBrightIcon from '../images/new-product.png'
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['On delivery', 'Delivered', 'Cancelled'],
    datasets: [
        {
            label: '# of Votes',
            data: [46, 83],
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

function Dashboard() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Container style={{ overflow: 'hidden', margin: '0', padding: '0', minWidth: '100%' }}>
                <Row className='dashboard-container'>
                    <Row style={{ textAlign: 'left' }} lg='12' md='12' sm='12'>
                        <ProSidebar>
                            <Menu iconShape="square" style={{ backgroundColor: '#080809' }}>
                                <h3 className='sidebar-title'>Dashboard.</h3>
                                <MenuItem><img src={PeopleBrightIcon} alt='' width='32px'></img><a href='#dashboard-customers' style={{ color: '#edf2f4' }}> Customers</a></MenuItem>
                                <MenuItem><img src={OrdersBrightIcon} alt='' width='32px'></img><a href='#dashboard-orders' style={{ color: '#edf2f4' }}> Orders</a></MenuItem>
                                <MenuItem><img src={ProductsBrightIcon} alt='' width='32px'></img><a href='#dashboard-products' style={{ color: '#edf2f4' }}> Products</a></MenuItem>
                            </Menu>
                        </ProSidebar>
                        <Col className='dashboard-info-container'>
                            <Row lg='4' style={{ marginTop: '.5rem' }}>
                                <Col>
                                    <h2 className='quantity-dashboard'>132</h2>
                                    <p>Total orders</p>
                                </Col>
                                <Col>
                                    <h2 className='quantity-dashboard'>95</h2>
                                    <p>Total Customers</p>
                                </Col>
                            </Row>
                            <p className='dashboard-summary-title'>Orders summary.</p>
                            <Row lg='6'>
                                <Col>
                                    <h2 className='quantity-dashboard'>46</h2>
                                    <p>On delivery</p>
                                </Col>
                                <Col>
                                    <h2 className='quantity-dashboard'>83</h2>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>mark@test.com</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>jacob@test.com</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>Bird</td>
                                            <td>larry@test.com</td>
                                        </tr>
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
                                        <tr>
                                            <td>1</td>
                                            <td>11</td>
                                            <td>03.11.2020.</td>
                                            <td>12:33AM</td>
                                            <td>Delivered</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>5</td>
                                            <td>12.12.2021.</td>
                                            <td>13:53AM</td>
                                            <td>Delivered</td>
                                        </tr>
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
                                    className='button-collapse'
                                    variant="dark"
                                >
                                    Add New
                                </Button>
                                <Collapse in={open}>
                                    <Form>
                                        <Row className='new-product-dashboard'>
                                            <Col>
                                                <label htmlFor='name' className='new-product-label'>Name</label> <br />
                                                <input id='name' type='text' className='form-input' />
                                            </Col>
                                            <Col>
                                                <label htmlFor='category' className='new-product-label'>Category</label>  <br />
                                                <input id='category' type='text' className='form-input' />

                                            </Col>
                                            <Col>
                                                <label htmlFor='brand' className='new-product-label'>Brand</label>  <br />
                                                <input id='brand' type='text' className='form-input' />
                                            </Col>
                                            <Col>
                                                <label htmlFor='price' className='new-product-label'>Price</label>  <br />
                                                <input id='price' type='text' className='form-input' />
                                            </Col>
                                            {/* <Col >
                                                <label htmlFor='price'>Description</label>  <br />
                                                <textarea maxLength={250} className='form-input' />
                                            </Col> */}
                                            <Button className='new-product-button' variant='dark'>Submit</Button>
                                        </Row>
                                    </Form>
                                </Collapse>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#id</th>
                                            <th>Category ID</th>
                                            <th>Brand ID</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <th>2</th>
                                            <th>4</th>
                                            <td>Keyboard</td>
                                            <td>23$</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <th>3</th>
                                            <th>2</th>
                                            <td>Mouse</td>
                                            <td>13$</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </Col>
                    </Row>
                </Row>

            </Container>
        </>
    );
}

export default Dashboard;
