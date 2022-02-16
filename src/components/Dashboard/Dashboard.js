import { Container, Row, Col } from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'react-pro-sidebar/dist/css/styles.css';
import '../Home/Home.css'
import './Dashboard.css'
import PeopleBrightIcon from '../images/people.png'
import OrdersBrightIcon from '../images/order-delivery.png'
import PeopleDarkIcon from '../images/people-dark.png'
// import OrdersDarkIcon from '../images/order-delivery-dark.png'
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
                <Row style={{ textAlign: 'left' }} className='dashboard-container' lg='12' md='12' sm='12'>
                    <ProSidebar>
                        <Menu iconShape="square" style={{ backgroundColor: '#080809' }}>
                            <h3 className='sidebar-title'>Dashboard.</h3>
                            <MenuItem><img src={PeopleBrightIcon} alt='' width='32px'></img> Orders</MenuItem>
                            <MenuItem><img src={OrdersBrightIcon} alt='' width='32px'></img> Customers</MenuItem>
                        </Menu>
                    </ProSidebar>
                    <Col>
                        <Row lg='4' style={{marginTop: '.5rem'}}>
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
                        <Row lg='4'>        
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;
