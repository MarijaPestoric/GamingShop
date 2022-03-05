import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../Home/Home.css'
import './Header.css'
import AccountIcon from '../images/account.png'
import SearchIcon from '../images/search.png'
import CartIcon from '../images/bag.png'
import Logo from '../images/logo.png'
function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#EDF2F4' }}>
                <Container>
                    <Navbar.Brand href="./"> <img src={Logo} alt='logo' width='200px'></img> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto" style={{ margin: '0' }}>

                            <NavLink to="/" className='main-navlink px-4'>Home</NavLink>
                            <NavLink to="/products" className='main-navlink px-4'>Products</NavLink>
                            <NavLink to="/about" className='main-navlink px-4'>About</NavLink>
                            <NavLink to="/contact" className='main-navlink px-4'>Contact</NavLink>

                        </Nav>
                        <Nav className='search-acc-cart'>
                            <NavLink to="#">
                                <Nav.Link>
                                    <img src={SearchIcon} alt='' width='32px' className='px-1' />
                                </Nav.Link>
                            </NavLink>
                            <NavLink to="/login">
                            <Nav.Link href="/login" >
                                    <img src={AccountIcon} alt='' width='32px' className='px-1' />
                            </Nav.Link>
                            </NavLink>
                            <NavLink to='/shopping-cart'>
                                <Nav.Link href="/shopping-cart">
                                    <img src={CartIcon} alt='' width='32px' className='px-1' />
                                </Nav.Link>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;