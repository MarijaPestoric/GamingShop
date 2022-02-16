import { Container, Row, Col, Table } from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTable } from 'react-table'
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
            data: [46, 83, 3],
            backgroundColor: [
                '#FF9E00',
                '#80ED99',
                '#D62828',
            ],
            borderColor: [
                '#FF9E00',
                '#80ED99',
                '#D62828',
            ],

        },
    ],
};

function Dashboard() {
    return (
        <>
            <Container style={{ overflow: 'hidden', margin: '0', minWidth: '100%' }}>
                <Row  className='dashboard-container'>
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
                            <Col>
                                <h2 className='quantity-dashboard'>3</h2>
                                <p>Cancelled</p>
                            </Col>
                        </Row>
                        <Row className='chart-container' lg='12' md='12' sm='12'>
                            <Doughnut data={data} />
                        </Row>
                        <Row id='dashboard-customers'>
                            <h4 style={{fontWeight: '600'}}>Customers</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row id='dashboard-orders'>
                            <h4 style={{fontWeight: '600'}}>Orders</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#id</th>
                                        <th>Customer ID</th>
                                        <th>Quantity</th>
                                        <th>Estimated total</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>11</td>
                                        <td>3</td>
                                        <td>59$</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>1</td>
                                        <td>13$</td>
                                        <td>Delivered</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row id='dashboard-products'>
                            <h4 style={{fontWeight: '600'}}>Products</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#id</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Keyboard</td>
                                        <td>23$</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
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
